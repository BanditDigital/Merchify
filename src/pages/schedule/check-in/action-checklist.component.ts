import {Component} from "@angular/core";
import {VisitActionModal} from "../visit-action/visit-action-modal.component";
import {StockCheckModal} from "../stock-check/stock-check.component";
import {Visit} from "../../../models/Visit";
import {AlertController, LoadingController, ModalController, NavParams, ViewController} from "ionic-angular";
import * as moment from 'moment';
import {Geolocation} from "@ionic-native/geolocation";
import {PhotoModal} from "../photos/photo-modal.component";
import {Stock} from "../../../models/Stock";
import {ProductsService} from "../../../services/products/products.service";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-action-checklist',
  templateUrl: 'action-checklist.view.html'
})
export class ActionChecklistComponent {

  activeVisit: Visit;

  constructor(private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private navParams: NavParams,
              private view: ViewController,
              private geolocation: Geolocation) {
    this.activeVisit = this.navParams.get('visit');
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
                visit.checkOutLocation = { long: position.coords.longitude, lat: position.coords.latitude};
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

  public saveVisit() {
    this.view.dismiss(this.activeVisit);
  }

  public dismiss() {
    this.view.dismiss();
  }

}
