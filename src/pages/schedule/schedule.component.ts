import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  NavParams
} from "ionic-angular";
import {ScheduleService} from "./schedule.service";
import {AlertService} from "../../shared/alert/alert.service";
import {Visit} from "../../models/Visit";
import {Component} from "@angular/core";
import {ScheduleNewModal} from "./add-new/schedule-new-modal.component";
import * as moment from 'moment';
import * as _ from 'lodash';
import {VisitReportModal} from "./visit-report/visit-report-modal.component";
import {VisitFilterPipe} from "../../shared/pipes/visit-filter.pipe";
import {ActionChecklistComponent} from "./check-in/action-checklist.component";
import {AuthService} from "../auth/auth.service";
import {EditCompleteComponent} from "./edit-complete-visit/edit-complete.component";
import {ExpensesModal} from "./expenses/expenses-modal.component";

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.view.html',
})
export class SchedulePage {

  rawData: Visit[] = [];
  visits: Visit[] = [];
  filteredVisits: Visit[];
  showCompleted: boolean = false;
  showScheduled: boolean = true;
  searchText: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private scheduleService: ScheduleService,
              private errorAlert: AlertService,
              public actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private authService: AuthService) {
    this.getVisits();
  }

  public isAdmin() {
    if(this.authService.isLoggedIn()) {
      return this.authService.isAdmin();
    } else {
      return false;
    }
  }

  public newAppointment() {
    let newAppointmentModal = this.modalCtrl.create(ScheduleNewModal);

    newAppointmentModal.onDidDismiss(results => {
      if (results && !results.edited) {
        this.rawData.push(results.visit);
        this.visitFilters();
      }
    });

    newAppointmentModal.present();
  }

  public getVisits() {
    let loading = this.loadingCtrl.create({content: 'Getting available appointments...'});
    loading.present();

    this.scheduleService.getVisits()
      .subscribe(visits => {
        this.rawData = visits;
        this.visitFilters();
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not load available appointments', error.error.message);
        loading.dismiss();
      });
  }

  public openVisit(visit) {
    let buttons = [];

    if (!visit.actualArrival) {
      buttons.push({
        text: 'Check In',
        handler: () => {
          this.checkIn(visit);
        }
      });
    }

    if(!visit.actualArrival)
    buttons.push({
      text: 'Edit Visit Details',
      handler: () => {
        this.editVisit(visit);
      }
    });

    if(!visit.actualArrival) {
      buttons.push({
        text: 'Delete Scheduled Visit',
        role: 'destructive',
        handler: () => {
          this.deleteVisit(visit);
        }
      });
    }

    if(visit.actualArrival && !visit.actualDeparture) {
      buttons.push({
        text: 'Update Record',
        handler: () => {
          this.updateActions(visit);
        }
      });
    }

    if(visit.actualArrival && visit.actualDeparture) {
      buttons.push({
        text: 'View Visit Report',
        handler: () => {
          this.navCtrl.push(VisitReportModal, { visit: visit });
        }
      });
    }

    if(visit.actualArrival && visit.actualDeparture && this.isAdmin()) {
      buttons.push({
        text: 'Edit Completed Visit',
        handler: () => {
          this.navCtrl.push(EditCompleteComponent, { visit: visit });
        }
      });
    }

    if(visit.actualArrival && visit.actualDeparture && this.isAdmin()) {
      buttons.push({
        text: 'Delete Visit',
        handler: () => {
          this.deleteVisit(visit);
        }
      });
    }

    if(visit.actualArrival && visit.actualDeparture) {
      buttons.push({
        text: 'Expenses & Travel',
        handler: () => {
          this.navCtrl.push(ExpensesModal, { visit: visit });
        }
      });
    }

    let actions = this.actionSheetCtrl.create({
      title: 'What next?',
      buttons
    });

    actions.present();
  }

  public editVisit(visit) {
    let newAppointmentModal = this.modalCtrl.create(ScheduleNewModal, {visit: visit, edit: true});

    newAppointmentModal.onDidDismiss(results => {
      if (results && results.edited) {
        _.pull(this.rawData, visit);
        this.rawData.push(results.visit);
        this.visitFilters();
      }
    });

    newAppointmentModal.present();
  }

  public checkIn(visit) {
      let loading = this.loadingCtrl.create({content: 'Checking in...'});
      let checkInTime = moment().utc();
      let confirm = this.alertCtrl.create({
        title: `Confirm Check-in`,
        message: `Are you sure you want to check-in now, the time recorded will be ${checkInTime.local().format('DD/MM/YYYY HH:mm Z')}`,
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
            handler: () => {
              loading.present();
              visit.actualArrival = checkInTime.utc();
              visit.hourlyRate = this.getHourlyRate(visit);
              visit.travelRate = this.getTravelRate(visit);
              visit.expenses = [];
              this.scheduleService.editVisit(visit)
                .subscribe((updated) => {
                  this.visitFilters();
                  loading.dismiss();
                }, error => {
                  this.errorAlert.showAlert('Could not check in', error.error.message);
                  loading.dismiss();
                });
            }
          }
        ]
      });
      confirm.present();
  }

  public deleteVisit(visit) {
    let loading = this.loadingCtrl.create({content: 'Deleting visit...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete this visit, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.scheduleService.deleteVisit(visit)
              .subscribe(() => {
                _.pull(this.rawData, visit);
                this.visitFilters();
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete visit', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public updateActions(visit) {
    let modal = this.modalCtrl.create(ActionChecklistComponent, { visit: visit}, { enableBackdropDismiss: false });
    let loading = this.loadingCtrl.create({content: 'Updating visit...'});

    modal.onDidDismiss(data => {
      loading.present();
      this.scheduleService.editVisit(data)
        .subscribe((updatedVisit) => {
          _.pull(this.rawData, visit);
          this.rawData.push(updatedVisit);
          this.visitFilters();
          loading.dismiss();
        }, error => {
          this.errorAlert.showAlert('Could not update visit', error.error.message);
          loading.dismiss();
        });
    });

    modal.present();

  }


  public visitFilters() : void {

    this.rawData.forEach(visit => {
      if(!visit.actualArrival) {
        visit.state = 'Scheduled';
      }

      if(visit.actualArrival && !visit.actualDeparture) {
        visit.state = 'Checked In';
      }

      if(visit.actualArrival && visit.actualDeparture) {
        visit.state = 'Completed';
      }
    });

    this.searchVisits();

  }

  public getVisitBadgeColor(visit: Visit) : string {
    if(!visit.actualArrival) {
      return 'primary';
    }

    if(visit.actualArrival && !visit.actualDeparture) {
      return 'secondary';
    }

    if(visit.actualArrival && visit.actualDeparture) {
      return 'dark';
    }
  }

  public searchVisits() {

    this.filteredVisits = new VisitFilterPipe()
      .transform(this.rawData, { userInput: this.searchText, showCompleted: this.showCompleted, showScheduled: this.showScheduled});

    this.visits = [];
    this.filteredVisits.forEach(visit => {
      this.visits.push(visit);
    })

  }

  public timeCheckedIn(visit) {
    return moment(moment()).diff(visit.actualArrival, 'hours', true).toFixed(2);
  }

  public timeSpent(visit) {
    return moment(visit.actualDeparture).diff(visit.actualArrival, 'hours', true).toFixed(2);
  }

  public totalSales(visit) {
    let total = 0;
    if(visit.stock) {

      for (let check of visit.stock) {
        total += check.qtySold * check.price;
      }
    }
    return total;
  }

  public getHourlyRate(visit: Visit) {
    let result = _.find(visit.user.brandRates, { 'brandId': visit.brand.id });
    if(result) {
      return result.rate;
    } else {
      return 0;
    }
  }

  public getTravelRate(visit: Visit) {
    let result = _.find(visit.user.brandRates, { 'brandId': visit.brand.id });
    if(result) {
      return result.travelRate;
    } else {
      return 0;
    }
  }

  public expensesTotal(visit) {
    let total = 0;
    visit.expenses.forEach(ex => {
      total = +total + +ex.amount;
    })
    return total;
  }

}

