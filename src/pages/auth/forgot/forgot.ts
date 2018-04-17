import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../../home/home";
import {AuthService} from "../auth.service";
import {AlertService} from "../../../shared/alert/alert.service";

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  private forgotForm: FormGroup;

  constructor(public navCtrl: NavController
              , public navParams: NavParams
              , private fb: FormBuilder
              , private loadingCtrl: LoadingController
              , private authService: AuthService
              , private alertService: AlertService) {
    this.initialiseForm();
  }

  private initialiseForm() {
    this.forgotForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  public submit(emailAddress) {
    let loading = this.loadingCtrl.create({content: 'Sending...'});
    loading.present();
      this.authService.forgot(emailAddress);
      this.alertService.showAlert('Reset Request Sent',
        'You will soon receive an email with instructions on how to reset your password');
      loading.dismiss();
      }
  }

}
