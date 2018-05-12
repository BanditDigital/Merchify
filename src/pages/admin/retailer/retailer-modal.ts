import {Component} from "@angular/core";
import {AlertController, LoadingController, NavParams, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../shared/alert/alert.service";
import {Retailer} from "../../../models/Retailer";
import {RetailerService} from "./retailer.service";
import {LocationsService} from "../location/locations.service";
import {Location} from "../../../models/Location";
import * as _ from 'lodash';
import {BrandsService} from "../brand/brands.service";
import {Brand} from "../../../models/Brand";

@Component({
  selector: 'modal-retailer',
  templateUrl: 'retailer-modal.html'
})
export class RetailerModal {

  retailer: Retailer = null;
  retailerForm: FormGroup;
  edit: boolean;

  locations: Location[] = [];
  filteredLocations: Location[] = [];
  searchTerm: string = '';
  showLocations: boolean = false;

  brands: Brand[] = [];
  filteredBrands: Brand[] = [];
  brandSearchTerm: string = '';
  showBrands: boolean = false;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private errorAlert: AlertService,
              private retailerService: RetailerService,
              private locationService: LocationsService,
              private brandService: BrandsService) {

    //Grab the account object passed in from the caller
    this.retailer = this.navParams.get('retailer');
    this.edit = this.navParams.get('edit');

    // Get all available locations & brands
    this.getAllLocations();
    this.getAllBrands();

    //Initialise form
    this.initialiseForm(this.retailer);
  }

  initialiseForm(retailer?: Retailer) {
    this.retailerForm = this.fb.group({
      name: [retailer ? retailer.name : '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])],
      type: [retailer ? retailer.type : '', Validators.compose([
        Validators.maxLength(20)
      ])]
    });
  }

  public save() {
    let loading = this.loadingCtrl.create({content: 'Saving retailer...'});

    loading.present();

    if (this.edit) {

      this.retailer = Object.assign(this.retailer, this.retailerForm.getRawValue());
      this.retailerService.editRetailer(this.retailer)
        .subscribe(updatedRetailer => {
          loading.dismiss();
          this.viewCtrl.dismiss({retailer: updatedRetailer, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not edit retailer', error.error.message);
        });
    }

    if (!this.edit) {
      this.retailer = this.retailerForm.getRawValue();
      this.retailerService.addRetailer(this.retailer)
        .subscribe(createdRetailer => {
          loading.dismiss();
          this.viewCtrl.dismiss({retailer: createdRetailer, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not add new retailer', error.error.message);
        });
    }
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public delete() {
    let loading = this.loadingCtrl.create({content: 'Deleting retailer...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${this.retailer.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.retailerService.deleteRetailer(this.retailer)
              .subscribe(() => {
                this.viewCtrl.dismiss({retailer: this.retailer, deleted: true})
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete retailer', error.error.message);
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
          this.brands = brands;
          this.filteredBrands = brands;
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not get brands', error.error.message);
        loading.dismiss();
      });
  }

  public brandChecked(ev, brand: Brand) {
    if (ev.value) {
      this.retailer.brands.push(brand);
    } else {
      _.remove(this.retailer.brands, { id: brand.id });
    }
  }

  public isBrandLinked(brand: Brand) : boolean {
    return _.find(this.retailer.brands, { id: brand.id });
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


  /// LOCATION ASSIGNMENT CONTROLS ///

  public getAllLocations() {
    let loading = this.loadingCtrl.create({content: 'Getting locations...'});

    loading.present();
    this.locationService.getLocations()
      .subscribe(locations => {
        if (locations) {
          this.locations = locations;
          this.filteredLocations = locations;
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not get locations', error.error.message);
        loading.dismiss();
      });
  }

  public locationChecked(ev, location: Location) {
    if (ev.value) {
      this.retailer.locations.push(location);
    } else {
      _.remove(this.retailer.locations, { id: location.id });
    }
  }

  public isLocationLinked(location: Location) : boolean {
    return _.find(this.retailer.locations, { id: location.id });
  }

  public filterLocations(){
    this.filteredLocations = this.locations.filter((location) => {
      return location.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  public toggleLocations() {
    this.showLocations = !this.showLocations;
    return this.showLocations;
  }

}
