import {Component} from "@angular/core";
import {LoadingController, NavParams, ViewController} from "ionic-angular";
import {Brand} from "../../../models/Brand";
import {BrandsService} from "../brand/brands.service";
import {AlertService} from "../../../shared/alert/alert.service";
import {Account} from "../../../models/Account";
import * as _ from 'lodash';

@Component({
  selector: 'page-brand-assignment',
  templateUrl: 'brand-assignment.html'
})
export class BrandAssignmentPage {

  private brands: Brand[] = [];
  private account: Account;

  private selectedBrands: Brand[] = [];

  constructor(private navParams: NavParams,
              private brandService: BrandsService,
              private loadingCtrl: LoadingController,
              private errorAlert: AlertService,
              private view: ViewController) {
    this.account = this.navParams.get('account');
    this.selectedBrands = this.account.brands;
    this.getAllBrands();
  }


  public getAllBrands() {
    let loading = this.loadingCtrl.create({content: 'Getting brands...'});

    loading.present();
    this.brandService.getBrands()
      .subscribe(brands => {
        this.brands = brands;
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not retrieve brands', error.error.message);
        loading.dismiss();
      });
  }

  public toggleSelection(event, brand: Brand) {
    if(event.checked) {
      this.selectedBrands.push(brand);
    } else {
      _.remove(this.selectedBrands, { _id: brand._id});
    }
    console.log(this.selectedBrands);
  }

  isBrandSelected(brand: Brand) {
    return _.find(this.selectedBrands, { _id: brand._id }) ;
  }

  public save() {
    this.account.brands = this.selectedBrands;
    console.log(this.selectedBrands);
    this.view.dismiss(this.account);
  }

  public dismiss() {
    this.view.dismiss();
  }
}

