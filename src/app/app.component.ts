import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {UserListPage} from "../pages/users/user-list/user-list";
import {SchedulePage} from "../pages/schedule/schedule";
import {BrandsPage} from "../pages/admin/brand/brands";
import {SignupPage} from "../pages/auth/signup/signup";
import {SigninPage} from "../pages/auth/signin/signin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SignupPage;

  pages: Array<{ title: string, component: any, icon: string }>;
  adminPages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      {title: 'Schedule', component: SchedulePage, icon: 'calendar'},
      {title: 'Profile', component: SchedulePage, icon: 'contact'},
      {title: 'Sign Out', component: SchedulePage, icon: 'exit'}
    ];

    this.adminPages = [
      {title: 'Admin Dashboard', component: UserListPage, icon: 'pie'},
      {title: 'User Management', component: UserListPage, icon: 'people'},
      {title: 'Brands & Products', component: BrandsPage, icon: 'brush'},
      {title: 'Retailers & Locations', component: UserListPage, icon: 'basket'},

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
