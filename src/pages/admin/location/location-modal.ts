import {Component} from "@angular/core";
import {AlertController, LoadingController, NavParams, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../shared/alert/alert.service";
import {Location} from "../../../models/Location";
import {LocationsService} from "./locations.service";

@Component({
  selector: 'modal-location',
  templateUrl: 'location-modal.html'
})
export class LocationModal {

  location: Location = null;
  locationForm: FormGroup;
  edit: boolean;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private errorAlert: AlertService,
              private locationService: LocationsService) {

    //Grab the account object passed in from the caller
    this.location = this.navParams.get('location');
    this.edit = this.navParams.get('edit')

    //Initialise form
    this.initialiseForm(this.location);
  }

  initialiseForm(location?: Location) {
    this.locationForm = this.fb.group({
      name: [location ? location.name : '', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      type: [location ? location.type : '', Validators.compose([
        Validators.maxLength(20)
      ])]
    });
  }

  public save() {
    let loading = this.loadingCtrl.create({content: 'Saving retailer...'});

    loading.present();

    if (this.edit) {

      this.location = Object.assign(this.location, this.locationForm.getRawValue());
      this.locationService.editLocation(this.location)
        .subscribe(updatedLocation => {
          loading.dismiss();
          this.viewCtrl.dismiss({location: updatedLocation, edited: this.edit});
        }, error => {
          loading.dismiss();
          this.errorAlert.showAlert('Could not edit retailer', error.error.message);
        });
    }

    if (!this.edit) {
      this.location =this.locationForm.getRawValue();
      this.locationService.addLocation(this.location)
        .subscribe(createdLocation => {
          loading.dismiss();
          this.viewCtrl.dismiss({location: createdLocation, edited: this.edit});
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
      message: `Are you sure you want to delete ${this.location.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.locationService.deleteLocation(this.location)
              .subscribe(() => {
                this.viewCtrl.dismiss({ location: this.location, deleted: true})
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
}
