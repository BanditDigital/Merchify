import {Component} from "@angular/core";
import {AlertController, LoadingController, ModalController, NavController} from "ionic-angular";
import * as _ from 'lodash';
import {AlertService} from "../../../shared/alert/alert.service";
import {Retailer} from "../../../models/Retailer";
import {RetailerService} from "./retailer.service";
import {RetailerModal} from "./retailer-modal";

@Component({
  selector: 'page-retailer',
  templateUrl: 'retailer.html'
})
export class RetailersPage {

  retailers: Retailer[] = [];

  constructor(private retailerService: RetailerService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(RetailerModal, { edit: false });

    createModal.onDidDismiss(results => {
      if (results) {
        this.retailers.push(results.retailer);
      }
    });

    createModal.present();
  }

  public openRetailer(retailer: Retailer) {
    let createModal = this.modalCtrl.create(RetailerModal, {retailer: retailer, edit: true});

    createModal.onDidDismiss(results => {
      if(results && results.edited) {
        _.pull(this.retailers, retailer);
        this.retailers.push(results.retailer);
      }

      if(results && results.deleted) {
        _.pull(this.retailers, retailer);
      }
    });

    createModal.present();
  }

  public getAll(refresher?) {
    let loading = this.loadingCtrl.create({content: 'Getting retailers...'});

    loading.present();
    this.retailerService.getRetailers()
      .subscribe(retailers => {
        if(retailers) {
          this.retailers = retailers;
          if(refresher) { refresher.complete() }
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not refresh retailers', error.error.message);
        if(refresher) { refresher.complete() }
        loading.dismiss();
      });
  }

}
