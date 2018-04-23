import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../../models/User";
import * as _ from 'lodash';

@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  userForm: FormGroup;
  user: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private view: ViewController) {

    //Get user from params
    this.user = this.navParams.get('user');

    //Set up form
    this.initialiseForm(this.user);
  }

  hasRole(user, role) {
    return _.includes(user.roles, role);
  }

  initialiseForm(user) {
    this.userForm = this.fb.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      address1: [user.address1],
      address2: [user.address2],
      town: [user.town],
      county: [user.county],
      postcode: [user.postcode],
      email: [user.email],
      telephone: [user.telephone],
      analysis1: [user.analysis1],
      analysis2: [user.analysis2],
      analysis3: [user.analysis3],
      startDate: [new Date(user.startDate).toJSON()],
      hourlyRate: [user.hourlyRate],
      country: [user.country],
      jobTitle: [user.jobTitle],
      organisationApproved: [user.organisationApproved],
      roles: this.fb.group({
        admin: [this.hasRole(user, 'Admin')],
        owner: [this.hasRole(user, 'Owner')],
        user: [this.hasRole(user, 'User')]
      })
    });
  }


  public saveChanges(user) {
    let roles = [];
    if(user.roles.admin) {
      roles.push('Admin');
    }
    if(user.roles.owner) {
      roles.push('Owner');
    }
    if(user.roles.user) {
      roles.push('User');
    }

    user.roles = roles;

    this.user = user;
    this.view.dismiss(this.user);
  }

  public dismiss() {
    this.view.dismiss();
  }
}
