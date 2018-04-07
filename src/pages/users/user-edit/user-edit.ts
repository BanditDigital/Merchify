import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  userForm: FormGroup;
  user:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder) {

    //Get user from params
    this.user = this.navParams.get('user');

    //Set up form
    this.initialiseForm(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUsersPage');
  }

  initialiseForm(user) {
    this.userForm = this.fb.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      address1: [user.address1],
      address2: [user.address2],
      town: [user.town],
      city: [user.city],
      postcode: [user.postcode],
      email: [user.email],
      telephone: [user.telephone],
      analysis1: [user.analysis1],
      startDate: [new Date(user.startDate).toJSON()],
      hourlyRate: [user.hourlyRate],
      country: [user.country],
      jobTitle: [user.jobTitle],
      accountStatus: [user.accountStatus]
    });
  }
}
