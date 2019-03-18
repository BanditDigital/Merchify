import {Component, ViewChild} from "@angular/core";
import {VisitActionModal} from "../visit-action/visit-action-modal.component";
import {StockCheckModal} from "../stock-check/stock-check.component";
import {Visit} from "../../../models/Visit";
import {AlertController, DateTime, LoadingController, ModalController, NavParams, ViewController} from "ionic-angular";
import * as moment from 'moment';
import {Geolocation} from "@ionic-native/geolocation";
import {PhotoModal} from "../photos/photo-modal.component";
import {ExpensesModal} from "../expenses/expenses-modal.component";
import {AuthService} from "../../auth/auth.service";
import {Stock} from "../../../models/Stock";
import {Rate} from "../../../models/Rate";
import {AlertService} from "../../../shared/alert/alert.service";
import {ProductsService} from "../../../services/products/products.service";
import {ScheduleService} from "../schedule.service";
import * as _ from 'lodash';
import {ScheduleNewModal} from "../add-new/schedule-new-modal.component";

@Component({
  selector: 'page-action-checklist',
  templateUrl: 'action-checklist.view.html'
})
export class ActionChecklistComponent {

  activeVisit: Visit;
  clock: any = '';

  @ViewChild('in')
  in: DateTime;

  @ViewChild('out')
  out: DateTime;


  constructor(private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private navParams: NavParams,
              private view: ViewController,
              private geolocation: Geolocation,
              private auth: AuthService,
              private errorAlert: AlertService,
              private productService: ProductsService,
              private loadingCtrl: LoadingController,
              private scheduleService: ScheduleService) {

    this.activeVisit = this.navParams.get('visit');
    this.startTiming(this.activeVisit);
  }

  public isAdmin() {
    return this.auth.isAdmin();
  }

  changeTime(type: string) {
    if(this.isAdmin()) {
      if(type == 'in') {
        this.in.open();
      } else if(this.activeVisit.actualDeparture){
        this.out.open();
      }
    }
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
      }
    });

    modal.present();
  }

  startTiming(visit): void {
    if(this.activeVisit.actualArrival) {
      setInterval(() => {
        let m = moment(moment())
          .diff(visit.actualArrival, 'seconds', true);
        let date = new Date(null);
        date.setSeconds(m); // specify value for SECONDS here
        this.clock = date.toISOString().substr(11, 8);
      }, 1000)
    }
  }

  public recordStockCheck(type: string) {
    let stock = this.modalCtrl.create(StockCheckModal, {visit: this.activeVisit, type: type});

    stock.onDidDismiss(data => {
      if (data && data.stockCheck) {
        this.activeVisit = data.stockCheck;
      }
    });

    stock.present();
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
      let checkOutTime = moment().utc();
      let confirm = this.alertCtrl.create({
        title: `Confirm Check-out`,
        message: `Are you sure you want to check-out now, the time recorded will be ${checkOutTime.local().format('DD/MM/YYYY HH:mm Z')}`,
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Confirm',
            handler: () => {
              this.geolocation.getCurrentPosition().then(position => {
                visit.actualDeparture = checkOutTime.utc();
                visit.checkOutLocation = {long: position.coords.longitude, lat: position.coords.latitude};
                this.saveVisit();
              }).catch(error => {
                visit.actualDeparture = checkOutTime.utc();
                this.saveVisit();
              });
            }
          }
        ]
      });
      confirm.present();
    }
  }

  public takePhotos() {
    let photos = this.modalCtrl.create(PhotoModal, {visit: this.activeVisit});
    photos.present();
  }

  openExpenses() {
    let modal = this.modalCtrl.create(ExpensesModal, {visit: this.activeVisit});

    modal.onDidDismiss(data => {
      if (data && data.visit) {
        this.activeVisit = data.visit;
      }
    });

    modal.present();
  }

  isInventory() {
    let complete = false;
    if(this.activeVisit.stock) {
      this.activeVisit.stock.forEach(item => {
        if (item.onHand > 0) {
          complete = true;
        }
      });
    }
    return complete;
  }

  isSales() {
    let complete = false;
    if(this.activeVisit.stock) {
      this.activeVisit.stock.forEach(item => {
        if(item.qtySold > 0) {
          complete = true;
        }
      });
    }

    return complete;
  }

  isVisitNotes() {
    return this.activeVisit.visitNotes;
  }

  isExpenses() {
      if(this.activeVisit.mileage > 0 || this.activeVisit.travelTime > 0
        || (this.activeVisit.expenses && this.activeVisit.expenses.length > 0)) {
        return true
      } else {
        return false;
      }
  }

  public checkIn(visit) {
    let loading = this.loadingCtrl.create({content: 'Checking in...'});
    let checkInTime = moment().utc();


    let confirm = this.alertCtrl.create({
      title: `Confirm Check-in`,
      message: `Are you sure you want to check-in now, the time 
      recorded will be ${checkInTime.local().format('DD/MM/YYYY HH:mm Z')}`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Confirm',
          handler: () => {
            loading.present();
            this.geolocation.getCurrentPosition().then(position => {
              this._checkIn(visit,loading,checkInTime, position);
            }).catch(error => {
              this._checkIn(visit,loading,checkInTime);
            });
          }
        }
      ]
    });
    confirm.present();

  }

  private _checkIn(visit, loading, time, position?) {
    this.productService.getProductsByBrand(visit.brand)
      .subscribe(products => {
        visit.stock = [];
        products.forEach(product => {
          let stock: Stock = {
            productId: product.id,
            visitId: visit.id,
            product: product,
            systemQty: 0,
            onHand: 0,
            qtySold: 0,
            price: product.retailPrice
          }
          visit.stock.push(stock);
        });
        visit.actualArrival = time.utc();
        const rate: Rate = _.find(visit.user.rates, {brandId: visit.brand.id});
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
            this.activeVisit = updated;
            this.startTiming(this.activeVisit);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not check in', error.error.message);
            loading.dismiss();
          });
      }, error => {
        this.errorAlert.showAlert('Could not load products', error.error.message);
      });
  }

  public editVisit(visit) {
    let newAppointmentModal = this.modalCtrl.create(ScheduleNewModal, {
      visit: visit,
      edit: true
    }, {showBackdrop: false});

    newAppointmentModal.onDidDismiss(results => {
      if (results && results.edited) {
        this.activeVisit = results.visit;
      }
    });

    newAppointmentModal.present();
  }

  public saveVisit() {
    this.view.dismiss(this.activeVisit);
  }

}
