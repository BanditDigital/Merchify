import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/User";
import {PasswordValidator} from "../../../shared/validators/password.validator";
import {SignupErrorPage} from "./error.modal";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private fb: FormBuilder,
              private modal: ModalController,
              private alertService: AlertService) {
    this.initialiseForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  public register(user: User) {
    this.authService.register(user)
      .subscribe(success => {
        this.alertService.showAlert('Verify Email', 'An email has been sent to the entered address for verification');
        this.navCtrl.pop();
      }, errors => {
        console.log(JSON.stringify(errors));
        this.errorModal(errors.error);
      });
  }

  initialiseForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(80)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ])],
      confirmPassword: [''],
      accessCode: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])],
      telephone: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      address: this.fb.group({
        line1: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        line2: ['', Validators.compose([
          Validators.maxLength(80)
        ])],
        town: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        county: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(80)
        ])],
        postcode: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(8)
        ])],
        country: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ])]
      })
    }, {
      validator: PasswordValidator.MatchPassword
    });
  }

  public errorModal(errors) {
    let modal = this.modal.create(SignupErrorPage, {errors: errors});
    modal.present();
  }

}
