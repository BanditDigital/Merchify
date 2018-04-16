import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  template: `<ion-header>
          
              <ion-navbar>
                <ion-title>Oops.. something went wrong!</ion-title>
              </ion-navbar>
          
            </ion-header>
          
            <ion-content padding>
              <h2>Sign up could not be compeleted.</h2>
              <p>Please check the following items and try again...</p>
              <ul>
                <li *ngFor="let error of errors.validationErrors">{{ error }}</li>
              </ul>
            </ion-content>
          <ion-footer>
            <ion-toolbar padding end>
              <ion-buttons end right>
                <button ion-button (click)="close()">CLOSE</button>
              </ion-buttons>
            </ion-toolbar>
          </ion-footer>`,
  selector: 'page-signup-error'
})
export class SignupErrorPage {

  errors: any = null;

  constructor(private view: ViewController,
              private navParams: NavParams){
    this.errors = this.navParams.get('errors');
  }

  close() {
    this.view.dismiss();
  }
}
