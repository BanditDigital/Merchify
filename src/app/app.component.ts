import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BrandsPage} from "../pages/admin/brand/brands";
import {SigninPage} from "../pages/auth/signin/signin";
import {AuthService} from "../pages/auth/auth.service";
import {UserListPage} from "../pages/admin/users/user-list/user-list";
import {ProductsPage} from "../pages/admin/products/products";
import {LocationsPage} from "../pages/admin/location/locations";
import {RetailersPage} from "../pages/admin/retailer/retailer";
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import {SchedulePage} from "../pages/schedule/schedule.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = SchedulePage;
  public isAdmin: boolean;

  private pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen
    , public authService: AuthService) {

    this.initializeApp();
    this.checkAdminRole();

    this.pages = [
      {title: 'Visits', component: SchedulePage, icon: 'calendar'},
      {title: 'User Management', component: UserListPage, icon: 'people'},
      {title: 'Brands', component: BrandsPage, icon: 'brush'},
      {title: 'Products', component: ProductsPage, icon: 'cube'},
      {title: 'Locations', component: LocationsPage, icon: 'navigate'},
      {title: 'Retailers', component: RetailersPage, icon: 'basket'},
    ];
  }

  private async initializeApp() {
    this.platform.ready().then(() => {
        this.checkAuthenticated();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
  }


  // Checks if the user is authenticated i.e. Already logged in
  private async checkAuthenticated() {
    if (await this.authService.isAuthenticated()) {
      this.rootPage = SchedulePage;
    } else {
      this.rootPage = SigninPage;
    }
  }

  private checkAdminRole() {
    this.authService.getToken()
      .subscribe(token => {
        if(token) {
          let user = jwt.decode(token);
          this.isAdmin = _.includes(user.roles, 'Admin');
        } else {
          this.isAdmin = false;
        }

      }, error => {
        console.log(error);
      })
  }

  public openPage(page) {
    this.nav.setRoot(page.component);
  }

  public signOut() {
    this.authService.signOut();
    this.nav.setRoot(SigninPage);
  }

}
