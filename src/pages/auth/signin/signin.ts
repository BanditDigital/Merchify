import { Component } from '@angular/core';
import {LoadingController, MenuController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../../../shared/validators/password.validator";
import {AuthService} from "../auth.service";
import {StorageService} from "../../../shared/storage/storage.service";
import {HomePage} from "../../home/home";
import {AlertService} from "../../../shared/alert/alert.service";
import {SignupPage} from "../signup/signup";
import {ForgotPage} from "../forgot/forgot";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  private signinForm: FormGroup;

  constructor(public navCtrl: NavController
              , private fb: FormBuilder
              , private authService: AuthService
              , private storageService: StorageService
              , private menuCtrl: MenuController
              , private alertService: AlertService
              , private loadingCtrl: LoadingController) {
    this.initialiseForm();
    this.menuCtrl.swipeEnable(false);
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
    // TODO Check user has also been verified by the system admin, and present alert if not
    let loading = this.loadingCtrl.create({content: 'Logging in...'});
    loading.present();
    this.authService.signIn(accountDetails)
      .subscribe(data => {
        this.storageService.setToken(data['token']);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(HomePage);
        loading.dismiss();
      }, err => {
        this.alertService.showAlert('Login Failed', err.message);
        loading.dismiss();
      });
  }

  public signUp() {
    this.navCtrl.push(SignupPage);
  }

  public forgot() {
    this.navCtrl.push(ForgotPage);
  }
}
