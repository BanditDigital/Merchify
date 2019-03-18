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
import {VisitFilterPipe} from "../../shared/pipes/visit-filter.pipe";
import {ActionChecklistComponent} from "./check-in/action-checklist.component";
import {AuthService} from "../auth/auth.service";
import {SigninPage} from "../auth/signin/signin";
import {Geolocation} from "@ionic-native/geolocation";
import {Rate} from "../../models/Rate";
import {PhotoModal} from "./photos/photo-modal.component";
import {VisitActionModal} from "./visit-action/visit-action-modal.component";
import {AppVersion} from "@ionic-native/app-version";
import {ProductsService} from "../../services/products/products.service";
import {Stock} from "../../models/Stock";

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
  groupShown = null;
  recordShown = null;
  dataShown = null;

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
              private version: AppVersion,
              private productService: ProductsService) {
    this.getVisits();
  }

  toggleDetails(group, record, data) {
    if (this.isRecordExpanded(group, record, data)) {
      this.recordShown = null;
      this.dataShown = null;
      this.groupShown = null;
    } else {
      this.recordShown = record;
      this.dataShown = data;
      this.groupShown = group
    }
  };

  isRecordExpanded(group, record, data) {
    return this.recordShown === record && this.groupShown === group && this.dataShown === data;
  };


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

  doRefresh() {
    this.visits = [];
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
    let modal = this.modalCtrl.create(ActionChecklistComponent, {visit: visit}, {
      enableBackdropDismiss: false,
      showBackdrop: false
    });
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

  public calculateSales(visit: Visit): number {
    let total = 0;
    if (visit.stock) {

      for (let check of visit.stock) {
        total += check.qtySold * check.price;
      }
    }
    return total;
  }

  public calculateMileageCost(visit: Visit): number {
    if (visit.mileage > visit.mileageThreshold) {
      return ((visit.mileage - visit.mileageThreshold) * visit.mileageRate)
    } else {
      return 0.00;
    }
  }

  public calculateTravelCost(visit: Visit): number {
    if (visit.travelTime > visit.travelTimeThreshold) {
      return ((visit.travelTime - visit.travelTimeThreshold) * visit.travelRate)
    } else {
      return 0.00;
    }
  }

  public calculateTimeSpent(visit: Visit): number {
    let hours = 0;
    if (visit.actualDeparture) {
      hours = Number.parseFloat(
        moment(visit.actualDeparture)
          .diff(visit.actualArrival, 'hours', true)
          .toFixed(2)
      );
    } else if (visit.actualArrival && !visit.actualDeparture) {
      hours = Number.parseFloat(
        moment(moment())
          .diff(visit.actualArrival, 'hours', true)
          .toFixed(2)
      );
    }
    return hours;
  }

  public calculateSalary(visit: Visit): number {
    let hours = 0;
    if (visit.actualDeparture) {
      hours = Number.parseFloat(
        moment(visit.actualDeparture)
          .diff(visit.actualArrival, 'hours', true)
          .toFixed(2)
      );
    } else if (visit.actualArrival && !visit.actualDeparture) {
      hours = Number.parseFloat(
        moment(moment())
          .diff(visit.actualArrival, 'hours', true)
          .toFixed(2)
      );
    }
    return visit.hourlyRate * hours;
  }

  public calculateExpenses(visit: Visit): number {
    let total = 0;
    visit.expenses.forEach(ex => {
      total = +total + +ex.amount;
    })
    return total;
  }

  public calculateInvoiceTotal(visit: Visit): number {
    let running = 0;
    running += this.calculateMileageCost(visit);
    running += this.calculateTravelCost(visit);
    running += this.calculateSalary(visit);
    running += this.calculateExpenses(visit);
    return running;
  }

  public signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot(SigninPage);
  }


}

