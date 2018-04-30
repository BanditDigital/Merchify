import {Component} from "@angular/core";
import {Brand} from "../../../models/Brand";
import {BrandsService} from "./brands.service";
import {AlertController, LoadingController, ModalController, NavController} from "ionic-angular";
import * as _ from 'lodash';
import {BrandModal} from "./brand-modal";
import {ProductsPage} from "../products/products";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {

  brands: Brand[] = [];

  constructor(private brandService: BrandsService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(BrandModal, {});
    let loading = this.loadingCtrl.create({content: 'Creating account...'});

    createModal.onDidDismiss(data => {
      if (data) {
        loading.present();
        this.brandService.addBrand(data)
          .subscribe(success => {
            this.brands.push(success);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not add account', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

  public delete(brand: Brand) {
    let loading = this.loadingCtrl.create({content: 'Deleting account...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${brand.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.brandService.deleteBrand(brand)
              .subscribe(success => {
                _.pull(this.brands, brand);
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete account', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public edit(brand: Brand) {
    let createModal = this.modalCtrl.create(BrandModal, {brand: brand});
    let loading = this.loadingCtrl.create({content: 'Updating account...'});

    createModal.onDidDismiss(data => {
      if (data) {
        loading.present();
        this.brandService.editBrand(data)
          .subscribe(success => {
            _.pull(this.brands, data);
            this.brands.push(success);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not edit account', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

  public getAll() {
    let loading = this.loadingCtrl.create({content: 'Getting brands...'});

    loading.present();
    this.brandService.getBrands()
      .subscribe(brands => {
        if(brands) {
          this.brands = brands;
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not edit account', error.error.message);
        loading.dismiss();
      });
  }

  openProducts(brand: Brand) {
    this.navCtrl.push(ProductsPage, {brand: brand});
  }

}
