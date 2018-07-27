import {Component} from "@angular/core";
import {AlertController, LoadingController, NavParams, ViewController} from "ionic-angular";
import {Brand} from "../../../models/Brand";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../shared/alert/alert.service";
import {BrandsService} from "./brands.service";

@Component({
  selector: 'modal-brand',
  templateUrl: 'brand-modal.html'
})
export class BrandModal {

  brand: Brand = null;
  brandForm: FormGroup;
  edit: boolean;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private errorAlert: AlertService,
              private brandService: BrandsService) {

    //Grab the account object passed in from the caller
    this.brand = this.navParams.get('brand');
    this.edit = this.navParams.get('edit')

    //Initialise form
    this.initialiseForm(this.brand);
  }

  initialiseForm(brand?: Brand) {
    this.brandForm = this.fb.group({
      name: [brand ? brand.name : '', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ])],
      hourlyRate: [brand ? brand.hourlyRate : 0, Validators.compose([
        Validators.required
      ])]
    });
  }

  public save() {

    let loading = this.loadingCtrl.create({content: 'Saving brand...'});

    loading.present();

    if (!this.edit) {
      this.brand = <Brand>{
        name: this.brandForm.controls.name.value,
        hourlyRate: this.brandForm.controls.hourlyRate.value
      };
    } else {
      this.brand.name = this.brandForm.controls.name.value;
      this.brand.hourlyRate = this.brandForm.controls.hourlyRate.value;
    }

    console.log(this.brand);

    if (this.edit) {

      this.brandService.editBrand(this.brand)
        .subscribe(createdBrand => {
          loading.dismiss();
          this.viewCtrl.dismiss({brand: createdBrand, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not edit brand', error.error.message);
        });
    }

    if (!this.edit) {
      this.brandService.addBrand(this.brand)
        .subscribe(createdBrand => {
          loading.dismiss();
          this.viewCtrl.dismiss({brand: createdBrand, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not add new brand', error.error.message);
        });
    }
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public delete(brand: Brand) {
    let loading = this.loadingCtrl.create({content: 'Deleting brand...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${this.brand.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.brandService.deleteBrand(this.brand)
              .subscribe(() => {
                this.viewCtrl.dismiss({ brand: this.brand, deleted: true})
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete brand', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }
}
