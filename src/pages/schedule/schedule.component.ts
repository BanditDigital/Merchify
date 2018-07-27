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
import {VisitFilterPipe} from "../../shared/pipes/visit-filter.pipe";
import {ActionChecklistComponent} from "./check-in/action-checklist.component";

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.view.html',
})
export class SchedulePage {
  rawData: Visit[] = [];
  visits: Visit[] = [];
  filteredVisits: Visit[];
  activeVisit: Visit;
  isAdmin: boolean;
  userId: number;
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
    this.navCtrl.push(VisitReportModal, { visit: visit });
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

}

