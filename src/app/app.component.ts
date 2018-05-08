import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BrandsPage} from "../pages/admin/brand/brands";
import {SigninPage} from "../pages/auth/signin/signin";
import {AuthService} from "../pages/auth/auth.service";
import {UserListPage} from "../pages/admin/users/user-list/user-list";
import {HomePage} from "../pages/home/home";
import {AccountsPage} from "../pages/admin/accounts/accounts";
import {ProductsPage} from "../pages/admin/products/products";

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
      {title: 'Schedule', component: HomePage, icon: 'calendar'},
      {title: 'Profile', component: HomePage, icon: 'contact'}
    ];
    this.adminPages = [
      {title: 'User Management', component: UserListPage, icon: 'people'},
      {title: 'Brands', component: BrandsPage, icon: 'brush'},
      {title: 'Products', component: ProductsPage, icon: 'cube'},
      {title: 'Locations', component: HomePage, icon: 'navigate'},
      {title: 'Retailers', component: HomePage, icon: 'basket'},
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
  private async checkAuthenticated() {
    if (await this.authService.isAuthenticated()) {
      this.rootPage = ProductsPage;
    } else {
      this.rootPage = SigninPage;
    }
  }

  public openPage(page) {
    this.nav.setRoot(page.component);
  }

  public signOut() {
    this.authService.signOut();
    this.nav.setRoot(SigninPage);
  }
}
