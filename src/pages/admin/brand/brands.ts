import {Component} from "@angular/core";
import {Brand} from "../../../models/Brand";
import {BrandsService} from "./brands.service";
import {LoadingController, ModalController} from "ionic-angular";
import * as _ from 'lodash';
import {BrandModal} from "./brand-modal";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {

  brands: Brand[] = [];

  constructor(private brandService: BrandsService,
              private modalCtrl: ModalController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(BrandModal, { edit: false });

    createModal.onDidDismiss(results => {
      if (results) {
        this.brands.push(results.brand);
      }
    });

    createModal.present();
  }

  public openBrand(brand: Brand) {
    let createModal = this.modalCtrl.create(BrandModal, {brand: brand, edit: true});

    createModal.onDidDismiss(results => {
      if(results && results.edited) {
        _.pull(this.brands, brand);
        this.brands.push(results.brand);
      }

      if(results && results.deleted) {
        _.pull(this.brands, brand);
      }
    });

    createModal.present();
  }

  public getAll(refresher?) {
    let loading = this.loadingCtrl.create({content: 'Getting brands...'});

    loading.present();
    this.brandService.getBrands()
      .subscribe(brands => {
        if(brands) {
          this.brands = brands;
          if(refresher) { refresher.complete() }
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not edit brand', error.error.message);
        if(refresher) { refresher.complete() }
        loading.dismiss();
      });
  }

}
