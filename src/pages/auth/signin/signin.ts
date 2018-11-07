import {Component} from '@angular/core';
import {LoadingController, MenuController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {AlertService} from "../../../shared/alert/alert.service";
import {MyApp} from "../../../app/app.component";
import {SchedulePage} from "../../schedule/schedule.component";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  private signinForm: FormGroup;

  constructor(public navCtrl: NavController
    , private fb: FormBuilder
    , private authService: AuthService
    , private menuCtrl: MenuController
    , private alertService: AlertService
    , private loadingCtrl: LoadingController) {
    this.initialiseForm();
    this.menuCtrl.swipeEnable(false);
  }

  ionViewWillEnter() {
    this.authService.isAuthenticated()
      .then(success => {
        if(success) {
          this.menuCtrl.swipeEnable(true);
          this.navCtrl.setRoot(SchedulePage);
        }
      });
  }

  private initialiseForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  public signIn(accountDetails) {
    let loading = this.loadingCtrl.create({content: 'Logging in...'});
    loading.present();
    this.authService.signIn(accountDetails)
      .then(success => {
        if(success) {
          this.menuCtrl.swipeEnable(true);
          this.navCtrl.setRoot(SchedulePage);
          loading.dismiss();
        } else {
          this.alertService.showAlert('Sign In Failed', 'Please check your credentials and try again!');
          loading.dismiss();
        }
      });
  }

}
