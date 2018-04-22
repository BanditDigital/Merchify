import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../../models/Product";

@Component({
  selector: 'modal-product',
  templateUrl: 'product-modal.html'
})
export class ProductModal {

  product: Product = null;
  productForm: FormGroup;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController) {

    //Grab the brand object passed in from the caller
    this.product = this.navParams.get('product');

    //Initialise form
    this.initialiseForm(this.product);
  }

  initialiseForm(product?: Product) {
    this.productForm = this.fb.group({
      sku: [product ? product.sku : ''],
      description: [product ? product.description : ''],
      size: [product ? product.size : ''],
      promoCode: [product ? product.promoCode : ''],
      barcode: [product ? product.barcode : ''],
      _id: [product ? product._id : null]
    });
  }

  save(form: FormGroup) {
    this.product = form.value;
    this.viewCtrl.dismiss(this.product);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
