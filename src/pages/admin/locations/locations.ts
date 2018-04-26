import {Component} from "@angular/core";
import {AlertController, LoadingController, ModalController, NavParams} from "ionic-angular";
import {Product} from "../../../models/Product";
import {AlertService} from "../../../shared/alert/alert.service";
import {LocationService} from "./location.service";
import {LocationModal} from "./location-modal";
import {Location} from "../../../models/Location";
import {Account} from "../../../models/Account";

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {

  account: Account = null;

  constructor(private locationService: LocationService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private errorAlert: AlertService,
              private navParams: NavParams,
              private loadingCtrl: LoadingController) {
    this.account = this.navParams.get('account');
  }

  public create() {
    let createModal = this.modalCtrl.create(LocationModal, {});
    let loading = this.loadingCtrl.create({content: 'Adding location...'});

    createModal.onDidDismiss(data => {

      if (data) {
        loading.present();
        this.locationService.addLocation(this.account, data)
          .subscribe(success => {
            this.account.locations = success;
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not add location', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

  public delete(location: Location) {
    let loading = this.loadingCtrl.create({content: 'Deleting location...'});

    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${location.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.locationService.deleteLocation(this.account, location)
              .subscribe(success => {
                this.account.locations = success;
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete location', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public edit(location: Location) {
    let loading = this.loadingCtrl.create({content: 'Updating location...'});
    let createModal = this.modalCtrl.create(LocationModal, { location: location});

    createModal.onDidDismiss(data => {

      if(data) {
        loading.present();
        this.locationService.updateLocation(this.account, data)
          .subscribe(success => {
            this.account.locations = success;
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not delete location', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }


}
