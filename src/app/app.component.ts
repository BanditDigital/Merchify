import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SigninPage} from "../pages/auth/signin/signin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = SigninPage;

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  private async initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }




}
