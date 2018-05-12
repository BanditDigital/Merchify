import {Component} from "@angular/core";
import {AlertController, LoadingController, NavParams, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../models/Product";
import {Brand} from "../../../models/Brand";
import {ProductsService} from "./products.service";
import {BrandsService} from "../brand/brands.service";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'modal-product',
  templateUrl: 'product-modal.html'
})
export class ProductModal {

  product: Product;
  productForm: FormGroup;
  brands: Brand[] = [];
  edit: boolean;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              private errorAlert: AlertService,
              private alertCtrl: AlertController,
              private productService: ProductsService,
              private brandsService: BrandsService) {

    // Grab the account object passed in from the caller
    this.product = this.navParams.get('product');
    this.edit = this.navParams.get('edit');

    // Get all brands for the dropdown menu
    this.getAllBrands();

    // Initialise form
    this.initialiseForm(this.product);
  }

  public initialiseForm(product?: Product) {
    this.productForm = this.fb.group({
      sku: [product ? product.sku : '', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])],
      description: [product ? product.description : '', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
      size: [product ? product.size : '', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])],
      promoCode: [product ? product.promoCode : '', Validators.compose([
        Validators.maxLength(10)
      ])],
      brand: [product ? product.brand.id : null, Validators.compose([
        Validators.required
      ])],
      barcode: [product ? product.barcode : '', Validators.compose([
        Validators.maxLength(15)
      ])],
    });

  }

  public save() {
    let loading = this.loadingCtrl.create({content: 'Saving product...'});

    loading.present();


    if (this.edit) {
      this.product = Object.assign(this.product, this.productForm.getRawValue());
      this.product.brand = this.brands.find(brand => brand.id == this.productForm.controls.brand.value);
      this.productService.updateProduct(this.product)
        .subscribe(updatedProduct => {
          loading.dismiss();
          this.viewCtrl.dismiss({product: updatedProduct, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not edit product', error.error.message);
        });
    }

    if (!this.edit) {
      this.product = this.productForm.getRawValue();
      this.product.brand = this.brands.find(brand => brand.id == this.productForm.controls.brand.value);
      this.productService.addProduct(this.product)
        .subscribe(createdProduct => {
          loading.dismiss();
          this.viewCtrl.dismiss({product: createdProduct, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not add new product', error.error.message);
        });
    }
  }

  public delete() {
    let loading = this.loadingCtrl.create({content: 'Deleting product...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${this.product.description}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.productService.deleteProduct(this.product)
              .subscribe(() => {
                this.viewCtrl.dismiss({ brand: this.product, deleted: true})
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


  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public getAllBrands() {
    let loading = this.loadingCtrl.create({content: 'Getting brands...'});

    loading.present();
    this.brandsService.getBrands()
      .subscribe(brands => {
        if(brands) {
          this.brands = brands;
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not edit brand', error.error.message);
        loading.dismiss();
      });
  }
}
