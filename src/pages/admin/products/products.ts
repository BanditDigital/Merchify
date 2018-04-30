import {Component} from "@angular/core";
import {AlertController, LoadingController, ModalController, NavParams} from "ionic-angular";
import * as _ from 'lodash';
import {Product} from "../../../models/Product";
import {ProductsService} from "./products.service";
import {Brand} from "../../../models/Brand";
import {ProductModal} from "./product-modal";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  brand: Brand = null;

  constructor(private productService: ProductsService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private errorAlert: AlertService,
              private navParams: NavParams,
              private loadingCtrl: LoadingController) {
    this.brand = this.navParams.get('brand');
  }

  public create() {
    let createModal = this.modalCtrl.create(ProductModal, {});
    let loading = this.loadingCtrl.create({content: 'Adding product...'});

    createModal.onDidDismiss(data => {

      if (data) {
        loading.present();
        this.productService.addProduct(this.brand, data)
          .subscribe(success => {
            this.brand.products = success;
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not add product', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

  public delete(product: Product) {
    let loading = this.loadingCtrl.create({content: 'Deleting product...'});

    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${product.description}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.productService.deleteProduct(this.brand, product)
              .subscribe(success => {
                this.brand.products = success;
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete product', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public edit(product: Product) {
    let loading = this.loadingCtrl.create({content: 'Updating product...'});
    let createModal = this.modalCtrl.create(ProductModal, { product: product});

    createModal.onDidDismiss(data => {

      if(data) {
        loading.present();
        this.productService.updateProduct(this.brand, data)
          .subscribe(success => {
            _.pull(this.brand.products, product);
            this.brand.products.push(success);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not delete product', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }


}
