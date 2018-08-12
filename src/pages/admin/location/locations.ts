import {Component} from "@angular/core";
import {LoadingController, ModalController} from "ionic-angular";
import * as _ from 'lodash';
import {AlertService} from "../../../shared/alert/alert.service";
import {LocationsService} from "./locations.service";
import {LocationModal} from "./location-modal";
import {Location} from "../../../models/Location";

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {

  locations: Location[] = [];

  constructor(private locationsService: LocationsService,
              private modalCtrl: ModalController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(LocationModal, { edit: false });

    createModal.onDidDismiss(results => {
      if (results) {
        this.locations.push(results.location);
      }
    });

    createModal.present();
  }

  public openLocation(location: Location) {
    let createModal = this.modalCtrl.create(LocationModal, {location: location, edit: true});

    createModal.onDidDismiss(results => {
      if(results && results.edited) {
        _.pull(this.locations, location);
        this.locations.push(results.location);
      }

      if(results && results.deleted) {
        _.pull(this.locations, location);
      }
    });

    createModal.present();
  }

  public getAll(refresher?) {
    let loading = this.loadingCtrl.create({content: 'Getting locations...'});

    loading.present();
    this.locationsService.getLocations()
      .subscribe(locations => {
        if(locations) {
          this.locations = locations;
          if(refresher) { refresher.complete() }
        }
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not refresh locations', error.error.message);
        if(refresher) { refresher.complete() }
        loading.dismiss();
      });
  }

}
