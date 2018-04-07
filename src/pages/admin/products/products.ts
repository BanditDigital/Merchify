import {Component} from "@angular/core";
import {AlertController, ModalController, NavParams} from "ionic-angular";
import * as _ from 'lodash';
import {Product} from "../../../models/Product";
import {ProductsService} from "./products.service";
import {Brand} from "../../../models/Brand";

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  products: Product[] = [];

  constructor(private productService: ProductsService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navParams: NavParams) {

    console.log(this.navParams.get('brand'));
    let brand: Brand = this.navParams.get('brand');
    this.getAll(brand);

  }

  public create() {
    // let createModal = this.modalCtrl.create(BrandModal, {});
    //
    // createModal.onDidDismiss(data => {
    //   if(data) {
    //     this.brandService.addBrand(data)
    //       .subscribe(success => {
    //         this.brands.push(success);
    //       }, error => {
    //         //TODO - Error handling
    //         console.log(error);
    //       })
    //   }
    //   console.log(data);
    // });
    //
    // createModal.present();
  }

  public delete(product: Product) {
    // let confirm = this.alertCtrl.create({
    //   title: `Confirm delete`,
    //   message: `Are you sure you want to delete ${brand.name}, you will not be able to undo this action?`,
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //     },
    //     {
    //       text: 'Yes, delete it!',
    //       handler: () => {
    //         console.log('dele');
    //         this.brandService.deleteBrand(brand)
    //           .subscribe(success => {
    //             console.log(success);
    //             _.pull(this.brands, success);
    //           }, error => {
    //             //TODO - Error handling
    //             console.log(error);
    //           });
    //       }
    //     }
    //   ]
    // });
    // confirm.present();
  }

  public edit(product: Product) {
    // let createModal = this.modalCtrl.create(BrandModal, { brand: brand});
    //
    // createModal.onDidDismiss(data => {
    //   if(data) {
    //     this.brandService.editBrand(data)
    //       .subscribe(success => {
    //         _.pull(this.brands, data);
    //         this.brands.push(success);
    //       }, error => {
    //         //TODO - Error handling
    //         console.log(error);
    //       })
    //   }
    //   console.log(data);
    // });
    //
    // createModal.present();
  }

  public getAll(brand: Brand) {
    //TODO - Error handling
    this.productService.getProducts(brand)
      .subscribe(products => this.products = products,
        error => console.log(error));
  }


}
