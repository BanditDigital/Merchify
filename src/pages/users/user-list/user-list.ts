import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  demoUser:any = [{
    firstName: 'Dominique',
    lastName: 'Paton',
    address1: ' Grove Lodge',
    address2: '2 Brockley Square',
    town: 'Wilmslow',
    city: '',
    postcode: 'SK9 5BF',
    email: 'keccles@praibeuty.com',
    telephone: '075582415541',
    analysis1: 'Sales',
    hourlyRate: 12.50,
    startDate: new Date(),
    country: 'Ireland',
    jobTitle: 'Neck Xpert',
    roles: ['Merchandiser'],
    brands: ['PRAI Beauty'],
    profileImage: 'https://cdn.elawoman.com/profilepic/women-avatar1.jpg',
    accountStatus: 'Live'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUsersPage');
  }

  edit(user) {
    this.navCtrl.push('UserEditPage', { user: user })
  }

}
