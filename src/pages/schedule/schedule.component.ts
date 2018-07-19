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
import {VisitActionModal} from "./visit-action/visit-action-modal.component";
import {StockCheckModal} from "./stock-check/stock-check.component";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {AuthService} from "../auth/auth.service";
import * as jwt from 'jsonwebtoken';
import {VisitReportModal} from "./visit-report/visit-report-modal.component";

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.view.html',
})
export class SchedulePage {
  visits: Visit[] = [];
  activeVisit: Visit;

  visitState: string = 'scheduled';
  isAdmin: boolean;
  userId: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private scheduleService: ScheduleService,
              private errorAlert: AlertService,
              public actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController,
              private camera: Camera,
              public authService: AuthService) {
    this.getVisits();
    this.checkAdminRole();
  }

  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  // public takePhoto() {
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64:
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.activeVisit.photo = base64Image;
  //     this.saveVisit();
  //   }, (err) => {
  //     // Handle error
  //   });
  // }


  private checkAdminRole() {
    this.authService.getToken()
      .subscribe(token => {
        if(token) {
          let user = jwt.decode(token);
          this.isAdmin = _.includes(user.roles, 'Admin');
          this.userId = user.userId;
        } else {
          this.isAdmin = false;
        }

      }, error => {
        console.log(error);
      })
  }

  public newAppointment() {
    let newAppointmentModal = this.modalCtrl.create(ScheduleNewModal);

    newAppointmentModal.onDidDismiss(results => {
      if (results && !results.edited) {
        this.visits.push(results.visit);
        this.sortVisitsAscByDate();
      }
    });

    newAppointmentModal.present();
  }

  public getVisits() {
    let loading = this.loadingCtrl.create({content: 'Getting available appointments...'});
    loading.present();
    this.scheduleService.getVisits()
      .subscribe(visits => {
        this.visits = visits;
        this.sortVisitsAscByDate();

        let active = _.filter(this.visits, (v) => {
          return v.actualArrival != null && v.actualDeparture == null && v.userId == this.userId;
        });
        this.activeVisit = active[0];

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

    if(visit.actualArrival && visit.actualDeparture) {
      buttons.push({
        text: 'View Visit Report',
        handler: () => {
          this.viewVisitReport(visit);
        }
      });
    }

    let actions = this.actionSheetCtrl.create({
      title: 'What next?',
      buttons
    });

    actions.present();
  }

  public viewVisitReport(visit) {
    let modal = this.modalCtrl.create(VisitReportModal, { visit: visit });
    modal.present();
  }

  public editVisit(visit) {
    let newAppointmentModal = this.modalCtrl.create(ScheduleNewModal, {visit: visit, edit: true});

    newAppointmentModal.onDidDismiss(results => {
      if (results && results.edited) {
        _.pull(this.visits, visit);
        this.visits.push(results.visit);
        this.sortVisitsAscByDate();
      }
    });

    newAppointmentModal.present();
  }

  public checkIn(visit) {
    if (this.activeVisit) {
      this.alertCtrl.create({
        title: 'Already checked in',
        message: `You are already checked in at ${this.activeVisit.retailer.name}, ${this.activeVisit.location.name} on behalf of ${this.activeVisit.brand.name}.
        Please checkout before attempting another check-in.`,
        buttons: [
          {text: 'OK'}
        ]
      }).present();
    } else {
      let loading = this.loadingCtrl.create({content: 'Checking in...'});
      let checkInTime = moment();
      let confirm = this.alertCtrl.create({
        title: `Confirm Check-in`,
        message: `Are you sure you want to check-in now, the time recorded will be ${checkInTime.format('DD/MM/YYYY HH:mm')}`,
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
            handler: () => {
              loading.present();
              visit.actualArrival = checkInTime.format('YYYY-MM-DD HH:mm:ss');
              this.scheduleService.editVisit(visit)
                .subscribe((updated) => {
                  this.activeVisit = updated;
                  this.sortVisitsAscByDate();
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
  }

  public checkOut(visit) {
    if (!this.activeVisit) {
      this.alertCtrl.create({
        title: 'Not checked in',
        message: `You are not checked in, please check-in and try again.`,
        buttons: [
          {text: 'OK'}
        ]
      }).present();
    } else {
      let loading = this.loadingCtrl.create({content: 'Checking out...'});
      let checkOutTime = moment();
      let confirm = this.alertCtrl.create({
        title: `Confirm Check-out`,
        message: `Are you sure you want to check-out now, the time recorded will be ${checkOutTime.format('DD/MM/YYYY HH:mm')}`,
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
            handler: () => {
              loading.present();
              visit.actualDeparture = checkOutTime.format('YYYY-MM-DD HH:mm:ss');
              this.scheduleService.editVisit(visit)
                .subscribe((updatedVisit) => {
                  this.activeVisit = null;
                  _.pull(this.visits, visit);
                  this.visits.push(updatedVisit);
                  this.sortVisitsAscByDate();
                  loading.dismiss();
                }, error => {
                  this.errorAlert.showAlert('Could not check out', error.error.message);
                  loading.dismiss();
                });
            }
          }
        ]
      });
      confirm.present();
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
                _.pull(this.visits, visit);
                this.sortVisitsAscByDate();
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

  public recordManagerName() {
    let prompt = this.alertCtrl.create({
      title: 'Record Contact Name',
      message: "Enter a name for a store contact",
      inputs: [
        {
          name: 'name',
          placeholder: 'Fred Bloggs',
          value: this.activeVisit.siteContact
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.activeVisit.siteContact = data.name;
            this.saveVisit();
          }
        }
      ]
    });
    prompt.present();
  }

  public recordVisitNotes() {
    let modal = this.modalCtrl.create(VisitActionModal, {notes: this.activeVisit.visitNotes});

    modal.onDidDismiss(data => {
      if (data && data.notes) {
        this.activeVisit.visitNotes = data.notes;
        this.saveVisit();
      }
    });

    modal.present();
  }

  public recordStockCheck(endOfDay?: boolean) {
    let stock = this.modalCtrl.create(StockCheckModal, {visit: this.activeVisit, sales: endOfDay});

    stock.onDidDismiss(data => {
      if (data && data.stockCheck) {
        this.activeVisit.stock = data.stockCheck;
        this.saveVisit();
      }
    });

    stock.present();
  }

  public endOfDayComplete() {
    let complete = false;
    if (this.activeVisit.stock) {
      this.activeVisit.stock.forEach(item => {
        if (item.onHand != null) {
          complete = item.qtySold != null;
        }
      });
      return complete;
    } else {
      return false;
    }
  }

  public stockcheckComplete() {
    if (this.activeVisit.stock) {
      for (let item of this.activeVisit.stock) {
        return item.onHand != null;
      }
    } else {
      return false;
    }
  }

  public saveVisit() {
    let loading = this.loadingCtrl.create({content: 'Saving changes...'});

    loading.present();
    this.scheduleService.editVisit(this.activeVisit)
      .subscribe(visit => {
        this.activeVisit = visit;
        this.sortVisitsAscByDate();
        loading.dismiss();
      }, error => {
        console.log(error);
        loading.dismiss();
        this.errorAlert.showAlert('Could not schedule new visit', error.error.message);
      });

  }

  public sortVisitsAscByDate() {
    this.visits.sort((a,b) => {

      if(a.actualArrival == null || b.actualArrival == null) {
        return 0;
      }

      var base = moment(a.actualArrival.toString());
      var compare = moment(b.actualArrival.toString());

      if(base.isBefore(compare)) {
        return 1
      }

      if(base.isAfter(compare)) {
        return -1
      }

      return 0;


    });
  }

}

