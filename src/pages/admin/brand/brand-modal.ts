import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Brand} from "../../../models/Brand";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'modal-brand',
  templateUrl: 'brand-modal.html'
})
export class BrandModal {

  brand: Brand = null;
  brandForm: FormGroup;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController) {

    //Grab the brand object passed in from the caller
    this.brand = this.navParams.get('brand');

    //Initialise form
    this.initialiseForm(this.brand);
  }

  initialiseForm(brand?: Brand) {
    this.brandForm = this.fb.group({
      name: [brand ? brand.name : '']
    });
  }

  save(form: FormGroup) {
    if(!this.brand) {
      this.brand = { name: form.value.name };
    } else {
      this.brand.name = form.value.name;
    }
    this.viewCtrl.dismiss(this.brand);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
