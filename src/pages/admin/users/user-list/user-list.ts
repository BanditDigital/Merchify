import {Component} from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {UserService} from '../user.service';
import {UserEditPage} from "../user-edit/user-edit";
import {User} from "../../../../models/User";
import {AlertService} from "../../../../shared/alert/alert.service";
import {AuthService} from "../../../auth/auth.service";
import * as _ from 'lodash';
import {Tenant} from "../../../../models/Tenant";

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

  users: User[];
  tenant: Tenant;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService,
              private loadingCtrl: LoadingController,
              private alert: AlertService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private authService: AuthService) {
    this.getUsers();
    this.getOrganisation();
  }

  public toggleUserApproval(user: User, status: boolean) {
    let loading = this.loadingCtrl.create({content: 'Updating account status...'});
    user.organisationApproved = status;
    loading.present();
    this.userService.updateUser(user)
      .subscribe(updated => {
        if (updated) {
          this.getUsers();
          loading.dismiss();
        }
      }, error => {
        this.alert.showAlert('Could not approve user', error.error.message);
        loading.dismiss();
      });
  }

  public getUsers() {
    let loading = this.loadingCtrl.create({content: 'Getting users...'});
    loading.present();
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        loading.dismiss();
      }, error => {
        this.alert.showAlert('Could not load users', error.error.message);
        loading.dismiss();
      });
  }

  public getOrganisation() {
    let loading = this.loadingCtrl.create({content: 'Getting access code...'});
    loading.present();
    this.userService.getOrganisation()
      .subscribe(tenant => {
        this.tenant = tenant;
        loading.dismiss();
      }, error => {
        this.alert.showAlert('Could not retrieve organisation details', error.error.message);
        loading.dismiss();
      });
  }


  public deleteUser(user: User) {
    let loading = this.loadingCtrl.create({content: 'Deleting user...'});

    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      message: `Are you sure you want to delete the user ${user.firstName}, you will not be able to undo this action?`,
      buttons: [
        {text: 'Cancel'},
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.userService.deleteUser(user)
              .subscribe(success => {
                _.pull(this.users, user);
                loading.dismiss();
              }, error => {
                this.alert.showAlert('Could not delete user', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    alert.present();
  }

  public resendToken(user: User) {
     let loading = this.loadingCtrl.create({content: 'Getting access code...'});

    let alert = this.alertCtrl.create({
      title: 'Resend welcome email?',
      message: `Are you sure you want to resend the verification link email to ${user.email}, this user will not be able to login until they have clicked the link?`,
      buttons: [
        {text: 'Cancel'},
        {
          text: 'Yes, send it!',
          handler: () => {
            loading.present();
            this.userService.resendWelcomeEmail(user)
              .subscribe(success => {
               this.alert.showAlert(`Email sent`, `Ask the user to check their inbox`);
               this.getUsers();
                loading.dismiss();
              }, error => {
                this.alert.showAlert('Could not delete user', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    alert.present();
  }

  public edit(user) {
    let loading = this.loadingCtrl.create({content: 'Getting access code...'});
    let editModal = this.modalCtrl.create(UserEditPage, {user: user});

    editModal.onDidDismiss(user => {
      loading.present();
      if(user) {
        this.userService.updateUser(user)
          .subscribe(() => {
            this.getUsers();
            loading.dismiss();
          }, error => {
            this.alert.showAlert('Could not update user', error.error.message);
            loading.dismiss();
          });
      } else {
        loading.dismiss();
      }
    });

    editModal.present();
  }

}
