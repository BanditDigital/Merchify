import {Component} from "@angular/core";
import {VisitActionModal} from "../visit-action/visit-action-modal.component";
import {StockCheckModal} from "../stock-check/stock-check.component";
import {Visit} from "../../../models/Visit";
import {AlertController, ModalController, NavParams, ViewController} from "ionic-angular";
import * as moment from 'moment';

@Component({
  selector: 'page-action-checklist',
  templateUrl: 'action-checklist.view.html'
})
export class ActionChecklistComponent {

  activeVisit: Visit;

  constructor(private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private navParams: NavParams,
              private view: ViewController) {
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

  public recordStockCheck(endOfDay?: boolean) {
    let stock = this.modalCtrl.create(StockCheckModal, {visit: this.activeVisit, sales: endOfDay});

    stock.onDidDismiss(data => {
      if (data && data.stockCheck) {
        this.activeVisit.stock = data.stockCheck;
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
              visit.actualDeparture = checkOutTime.format('YYYY-MM-DD HH:mm:ss');
              this.saveVisit();
            }
          }
        ]
      });
      confirm.present();
    }
  }

  public readyToCheckout() {

    if(this.stockcheckComplete() &&
      this.endOfDayComplete()
    ) {
      return true;
    } else {
      return false;
    }
  }


  public saveVisit() {
    this.view.dismiss(this.activeVisit);
  }

  public dismiss() {
    this.view.dismiss();
  }

}
