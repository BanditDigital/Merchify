import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../models/User";
import * as _ from 'lodash';
import {AlertService} from "../../../../shared/alert/alert.service";
import {UserService} from "../user.service";
import * as moment from 'moment';
import {Brand} from "../../../../models/Brand";
import {BrandsService} from "../../brand/brands.service";

@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  userForm: FormGroup;
  user: User;
  roles: string[] = ['User', 'Admin'];

  brands: Brand[] = [];
  filteredBrands: Brand[] = [];
  brandSearchTerm: string = '';
  showBrands: boolean = true;
  showUserDetails: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private view: ViewController,
              private loadingCtrl: LoadingController,
              private userService: UserService,
              private brandService: BrandsService,
              private alert: AlertService,
              private alertCtrl: AlertController) {

    // Get user from params
    this.user = this.navParams.get('user');

    // Get brands for assignment to user
    this.getAllBrands();

    // Set up form
    this.initialiseForm(this.user);
  }

  hasRole(user, role) {
    return _.includes(user.roles, role);
  }

  roleChecked(ev, role) {
    if(ev.value) {
      this.user.roles.push(role);
    } else {
      _.pull(this.user.roles, role);
    }
  }

  filterBrandsWithNoProducts(brands: Brand[]) {
    return _.filter(brands, brand => brand.products.length >=1 );
  }

  initialiseForm(user: User) {
    this.userForm = this.fb.group({
      firstName: [user.firstName, Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])],
      lastName: [user.lastName,Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])],
      email: [user.email, Validators.compose([
        Validators.required,
        Validators.maxLength(80)
      ])],
      telephone: [user.telephone, Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      analysis1: [user.analysis1, Validators.compose([
        Validators.maxLength(10)
      ])],
      analysis2: [user.analysis2, Validators.compose([
        Validators.maxLength(10)
      ])],
      analysis3: [user.analysis3, Validators.compose([
        Validators.maxLength(10)
      ])],
      startDate: [new Date(user.startDate).toJSON(),
        Validators.compose([
          Validators.required
        ])],
      jobTitle: [user.jobTitle,
        Validators.compose([
          Validators.maxLength(30)
        ])],
      organisationApproved: [user.organisationApproved],
      address: this.fb.group({
        line1: [user.address.line1, Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        line2: [user.address.line2, Validators.compose([
          Validators.maxLength(80)
        ])],
        town: [user.address.town, Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        county: [user.address.county, Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        postcode: [user.address.postcode, Validators.compose([
          Validators.required,
          Validators.maxLength(8)
        ])],
        country: [user.address.country, Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ])]
      })
    });
  }


  public dismiss() {
    this.view.dismiss();
  }

  public save() {
    let loading = this.loadingCtrl.create({content: 'Saving user...'});

    loading.present();

    this.user = Object.assign(this.user, this.userForm.getRawValue());
    this.user.startDate = moment(this.user.startDate).format('YYYY-MM-DD');

    this.userService.updateUser(this.user)
      .subscribe(updatedUser => {
        if (updatedUser) {
          this.view.dismiss({user: updatedUser, edited: true})
        }
        loading.dismiss();
      }, error => {
        this.alert.showAlert('Could not update user', error.error.message);
        loading.dismiss();
      });
  }

  public delete() {
    let loading = this.loadingCtrl.create({content: 'Deleting brand...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${this.user.firstName}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.userService.deleteUser(this.user)
              .subscribe(() => {
                this.view.dismiss({ user: this.user, deleted: true})
                loading.dismiss();
              }, error => {
                this.alert.showAlert('Could not delete user', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

/// BRAND ASSIGNMENT CONTROLS ///

  public getAllBrands() {
    let loading = this.loadingCtrl.create({content: 'Getting brands...'});

    loading.present();
    this.brandService.getBrands()
      .subscribe(brands => {
        if (brands) {
          this.brands = this.filterBrandsWithNoProducts(brands);
          this.filteredBrands = this.filterBrandsWithNoProducts(brands);
        }
        loading.dismiss();
      }, error => {
        this.alert.showAlert('Could not get brands', error.error.message);
        loading.dismiss();
      });
  }

  public brandChecked(ev, brand: Brand) {
    if (ev.value) {
      this.user.brands.push(brand);
      this.showBrandRatePrompt(brand);
    } else {
      _.remove(this.user.brands, {id: brand.id});
      _.remove(this.user.brandRates, {brandId: brand.id});
    }
  }

  public showBrandRatePrompt(brand: Brand) {
    let prompt = this.alertCtrl.create({
      title: 'Brand Rates',
      message: `Enter a the hourly rate for ${brand.name} for ${this.user.firstName + ' ' + this.user.lastName}`,
      inputs: [
        {
          name: 'rate',
          placeholder: 'Pay Rate',
          type: 'text',
          value: this.getUserBrandRate(brand)
        },
        {
          name: 'travelRate',
          placeholder: 'Travel Rate',
          type: 'text',
          value: this.getUserTravelRate(brand)
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: data => {
            this.user.brandRates.push({brandId: brand.id, rate: data.rate, travelRate: data.travelRate})
          }
        }
      ]
    });
    prompt.present();

  }

  public getUserBrandRate(brand) {
    if(this.isBrandLinked(brand)) {
      let result = _.find(this.user.brandRates, { 'brandId': brand.id });
      if(result) {
        return result.rate;
      } else {
        return null;
      }
    }
  }

  public getUserTravelRate(brand) {
    if(this.isBrandLinked(brand)) {
      let result = _.find(this.user.brandRates, { 'brandId': brand.id });
      if(result) {
        return result.travelRate;
      } else {
        return null;
      }
    }
  }

  public isBrandLinked(brand: Brand) : boolean {
    return _.find(this.user.brands, { id: brand.id });
  }

  public filterBrands(){
    this.filteredBrands = this.brands.filter((brand) => {
      return brand.name.toLowerCase().indexOf(this.brandSearchTerm.toLowerCase()) > -1;
    });
  }

  public toggleBrands() {
    this.showBrands = !this.showBrands;
    return this.showBrands;
  }

  public toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
    return this.showUserDetails;
  }
}
