import {Component} from "@angular/core";
import {LoadingController, ModalController} from "ionic-angular";
import * as _ from 'lodash';
import {Product} from "../../../models/Product";
import {ProductsService} from "./products.service";
import {ProductModal} from "./product-modal";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  products: Product[] = [];

  constructor(private productService: ProductsService,
              private modalCtrl: ModalController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(ProductModal, { edit: false });

    createModal.onDidDismiss(results => {
      if (results) {
        this.products.push(results.product);
      }
    });

    createModal.present();
  }

  public openProduct(product: Product) {
    let createModal = this.modalCtrl.create(ProductModal, {product: product, edit: true});

    createModal.onDidDismiss(results => {
      if(results && results.edited) {
        _.pull(this.products, product);
        this.products.push(results.product);
      }

      if(results && results.deleted) {
        _.pull(this.products, product);
      }
    });

    createModal.present();
  }

  public getAll(refresher?) {
    let loading = this.loadingCtrl.create({content: 'Getting products...'});

    loading.present();
    this.productService.getProducts()
      .subscribe(products => {
        if(products) {
          this.products = products;
          if(refresher) { refresher.complete() }
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not edit product', error.error.message);
        if(refresher) { refresher.complete() }
        loading.dismiss();
      });
  }


}
