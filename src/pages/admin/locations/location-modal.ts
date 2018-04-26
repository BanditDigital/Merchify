import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "../../../models/Location";

@Component({
  selector: 'modal-location',
  templateUrl: 'location-modal.html'
})
export class LocationModal {

  location: Location = null;
  locationForm: FormGroup;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController) {

    //Grab the account object passed in from the caller
    this.location = this.navParams.get('location');

    //Initialise form
    this.initialiseForm(this.location);
  }

  initialiseForm(location?: Location) {
    this.locationForm = this.fb.group({
      name: [location ? location.name : ''],
      storeType: [location ? location.storeType : '']
    });
  }

  save(form: FormGroup) {
    let id = ''
    if(this.location) {
      id = this.location._id;
      this.location = form.value;
      this.location._id = id;
    } else {
      this.location = form.value;
    }

    this.viewCtrl.dismiss(this.location);
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
