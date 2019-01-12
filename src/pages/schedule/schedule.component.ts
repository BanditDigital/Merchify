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
import {ExpensesModal} from "./expenses/expenses-modal.component";
import {AuthService} from "../auth/auth.service";
import {SigninPage} from "../auth/signin/signin";
import {Geolocation} from "@ionic-native/geolocation";
import {Rate} from "../../models/Rate";
import {PhotoModal} from "./photos/photo-modal.component";
import {VisitActionModal} from "./visit-action/visit-action-modal.component";
import {AppVersion} from "@ionic-native/app-version";

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
  totalVisits: number;
  skip = 0;
  take = 2;
  recordsPerPage = 15;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private scheduleService: ScheduleService,
              private errorAlert: AlertService,
              public actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private auth: AuthService,
              private geolocation: Geolocation,
              private version: AppVersion) {
    this.getVisits();
  }

  showSupport() {
    this.version.getVersionNumber().then(info => {
      this.alertCtrl.create({
        title: 'Merchifi',
        subTitle: 'Version ' + info,
        message: 'For support please contact your administrator or submit an email request to support@banditdigital.co.uk'
      }).present();
    })

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

  public isAdmin() {
    return this.auth.isAdmin();
  }

  public getVisits() {
    this.skip = 0;
    this.take = this.recordsPerPage;

    let loading = this.loadingCtrl.create({content: 'Getting available appointments...'});
    loading.present();

    this.scheduleService.getVisits(this.skip, this.take)
      .subscribe(data => {
        this.rawData = data.completed.concat(data.scheduled, data.checkedIn);
        this.totalVisits = data.total;
        this.visitFilters();

        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not load available appointments', error.error.message);
        loading.dismiss();
      });
  }

  public getMoreVisits(infiniteScroll) {
    console.log(infiniteScroll);
    if ((this.skip + this.recordsPerPage) < this.totalVisits) {
      this.skip = this.skip + this.recordsPerPage;
      this.take = this.recordsPerPage;
      this.scheduleService.getVisits(this.skip, this.take).subscribe(data => {

        this.rawData = this.rawData.concat(data.completed);
        this.visitFilters();

        if (infiniteScroll) {
          infiniteScroll.complete();
        }

      }, err => {
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      });
    } else {
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    }

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

    if (!visit.actualArrival)
      buttons.push({
        text: 'Edit',
        handler: () => {
          this.editVisit(visit);
        }
      });

    if (!visit.actualArrival) {
      buttons.push({
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          this.deleteVisit(visit);
        }
      });
    }

    if (visit.actualArrival && !visit.actualDeparture) {
      buttons.push({
          text: 'Record Activity',
          handler: () => {
            this.updateActions(visit);
          }
        });
    }

    if (visit.actualArrival && visit.actualDeparture) {
      buttons.push(
        {
          text: 'Photos',
          handler: () => {
            this.visitPhotos(visit);
          }
        });
    }

    if (visit.actualArrival && visit.actualDeparture) {
      buttons.push(
        {
          text: 'Notes',
          handler: () => {
            this.editVisitNotes(visit);
          }
        });
    }

    if (visit.actualArrival && visit.actualDeparture) {
      buttons.push({
        text: 'Expenses & Travel',
        handler: () => {
          this.navCtrl.push(ExpensesModal, {visit: visit});
        }
      });
    }

    if (visit.actualArrival && visit.actualDeparture) {
      buttons.push({
          text: 'Visit Report',
          handler: () => {
            this.navCtrl.push(VisitReportModal, {visit: visit});
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

  public editVisitNotes(visit) {
    let loading = this.loadingCtrl.create({content: 'Updating notes...'});
    let notes = this.modalCtrl.create(VisitActionModal, {notes: visit.visitNotes});
    notes.onDidDismiss(data => {
      if(data) {
        visit.visitNotes = data.notes;
        loading.present();
        this.scheduleService.editVisit(visit)
          .subscribe((updatedVisit) => {
            _.pull(this.rawData, visit);
            this.rawData.push(updatedVisit);
            this.visitFilters();
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not update visit notes', error.error.message);
            loading.dismiss();
          });
      }
    });
    notes.present();
  }

  public visitPhotos(visit) {
    let photos = this.modalCtrl.create(PhotoModal, {visit: visit});
    photos.present();
  }

  public checkIn(visit) {
    let loading = this.loadingCtrl.create({content: 'Checking in...'});
    let checkInTime = moment().utc();

    this.geolocation.getCurrentPosition().then(position => {
      console.log(position);
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
              console.log(visit.user);
              const rate: Rate = _.find(visit.user.rates, {brandId: visit.brand.id});
              console.log(rate);

              visit.hourlyRate = rate.hourlyRate;
              visit.travelRate = rate.travelTimeRate;
              visit.mileageRate = rate.mileageRate;
              visit.travelTimeThreshold = rate.travelTimePayableThreshold;
              visit.mileageThreshold = rate.mileagePayableThreshold;
              visit.expenses = [];
              visit.checkInLocation = {long: position.coords.longitude, lat: position.coords.latitude};
              visit.checkOutLocation = {long: null, lat: null};
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
    });

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
    let modal = this.modalCtrl.create(ActionChecklistComponent, {visit: visit}, {enableBackdropDismiss: false});
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

  public visitFilters(): void {

    this.rawData.forEach(visit => {
      if (!visit.actualArrival) {
        visit.state = 'Scheduled';
      }

      if (visit.actualArrival && !visit.actualDeparture) {
        visit.state = 'Checked In';
      }

      if (visit.actualArrival && visit.actualDeparture) {
        visit.state = 'Completed';
      }
    });

    this.searchVisits();

  }

  public getVisitBadgeColor(visit: Visit): string {
    if (!visit.actualArrival) {
      return 'primary';
    }

    if (visit.actualArrival && !visit.actualDeparture) {
      return 'secondary';
    }

    if (visit.actualArrival && visit.actualDeparture) {
      return 'dark';
    }
  }

  public searchVisits() {

    this.filteredVisits = new VisitFilterPipe()
      .transform(this.rawData, {
        userInput: this.searchText,
        showCompleted: this.showCompleted,
        showScheduled: this.showScheduled
      });

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
    if (visit.stock) {

      for (let check of visit.stock) {
        total += check.qtySold * check.price;
      }
    }
    return total;
  }

  public getHourlyRate(visit: Visit) {
    let result: Rate = _.find(visit.user.rates, {'brandId': visit.brand.id});
    if (result) {
      return result.hourlyRate;
    } else {
      return 0;
    }
  }

  public getTravelRate(visit: Visit) {
    let result: Rate = _.find(visit.user.rates, {'brandId': visit.brand.id});
    if (result) {
      return result.travelTimeRate;
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

  public signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot(SigninPage);
  }


}

