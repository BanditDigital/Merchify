import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserService} from '../user.service';
import {User} from "../../../models/User";
import {UserEditPage} from "../user-edit/user-edit";

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  users: User[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService) {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      }, error => {
        //TODO - Error handling
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  edit(user) {
    this.navCtrl.push(UserEditPage, {user: user})
  }

}
