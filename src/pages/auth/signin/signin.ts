import {Component} from '@angular/core';
import {LoadingController, MenuController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {StorageService} from "../../../shared/storage/storage.service";
import {AlertService} from "../../../shared/alert/alert.service";
import {SignupPage} from "../signup/signup";
import {ForgotPage} from "../forgot/forgot";
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
    let loading = this.loadingCtrl.create({content: 'Logging in...'});
    loading.present();
    this.authService.signIn(accountDetails)
      .subscribe(data => {
        this.storageService.setToken(data['token']);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(SchedulePage);
        loading.dismiss();
      }, err => {
        this.alertService.showAlert('Login Failed', err.error.message);
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
