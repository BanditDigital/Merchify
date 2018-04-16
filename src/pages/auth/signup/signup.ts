import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/User";
import {PasswordValidator} from "../../../shared/validators/password.validator";
import {EmailPage} from "./email";
import {SignupErrorPage} from "./error.modal";


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
              private modal: ModalController) {
    this.initialiseForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  public register(user: User) {
    this.authService.register(user)
      .subscribe(success => {
        this.navCtrl.push(EmailPage, success);
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
      tenant: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(8)
      ])],
      address1: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(80)
      ])],
      address2: ['', Validators.compose([
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
      ])],
      telephone: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])]
    }, {
      validator: PasswordValidator.MatchPassword
    });
  }

  public errorModal(errors) {
    let modal = this.modal.create(SignupErrorPage, { errors: errors });
    modal.present();
  }

}
