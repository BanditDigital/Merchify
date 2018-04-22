import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {UserListPage} from "../pages/users/user-list/user-list";
import {SchedulePage} from "../pages/schedule/schedule";
import {BrandsPage} from "../pages/admin/brand/brands";
import {SigninPage} from "../pages/auth/signin/signin";
import {AuthService} from "../pages/auth/auth.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any;

  private pages: Array<{ title: string, component: any, icon: string }>;
  private adminPages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen
    , private authService: AuthService) {

    this.initializeApp();

    this.pages = [
      {title: 'Schedule', component: SchedulePage, icon: 'calendar'},
      {title: 'Profile', component: SchedulePage, icon: 'contact'}
    ];
    this.adminPages = [
      {title: 'Admin Dashboard', component: UserListPage, icon: 'pie'},
      {title: 'User Management', component: UserListPage, icon: 'people'},
      {title: 'Brands & Products', component: BrandsPage, icon: 'brush'},
      {title: 'Retailers & Locations', component: UserListPage, icon: 'basket'},
    ];

  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkAuthenticated();
    });
  }

  // Checks if the user is authenticated i.e. Already logged in
  private checkAuthenticated() {
    if (this.authService.isAuthenticated()) {
      this.rootPage = BrandsPage;
    } else {
      this.rootPage = SigninPage;
    }
  }

  // Opens pages selected via the menu
  public openPage(page) {
    this.nav.setRoot(page.component);
  }

  // Calls the storageService via the authService to clear local storage
  public signOut() {
    this.authService.signOut();
    this.nav.setRoot(SigninPage);
  }
}
