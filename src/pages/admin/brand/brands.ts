import {Component} from "@angular/core";
import {Brand} from "../../../models/Brand";
import {BrandsService} from "./brands.service";
import {AlertController, ModalController, NavController} from "ionic-angular";
import * as _ from 'lodash';
import {BrandModal} from "./brand-modal";
import {ProductsPage} from "../products/products";

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {

  brands: Brand[] = [];

  constructor(private brandService: BrandsService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(BrandModal, {});

    createModal.onDidDismiss(data => {
      if(data) {
        this.brandService.addBrand(data)
          .subscribe(success => {
            this.brands.push(success);
          }, error => {
            //TODO - Error handling
            console.log(error);
          })
      }
      console.log(data);
    });

    createModal.present();
  }

  public delete(brand: Brand) {
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
            console.log('dele');
            this.brandService.deleteBrand(brand)
              .subscribe(success => {
                console.log(success);
                _.pull(this.brands, success);
              }, error => {
                //TODO - Error handling
                console.log(error);
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public edit(brand: Brand) {
    let createModal = this.modalCtrl.create(BrandModal, { brand: brand});

    createModal.onDidDismiss(data => {
      if(data) {
        this.brandService.editBrand(data)
          .subscribe(success => {
            _.pull(this.brands, data);
            this.brands.push(success);
          }, error => {
            //TODO - Error handling
            console.log(error);
          })
      }
    });

    createModal.present();
  }

  public getAll() {
    //TODO - Error handling
    this.brandService.getBrands()
      .subscribe(brands => this.brands = brands,
        error => console.log(error));
  }

  openProducts(brand: Brand) {
    this.navCtrl.push(ProductsPage, { brand: brand });
  }

}
