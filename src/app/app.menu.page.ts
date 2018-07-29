import {Component, ViewChild} from "@angular/core";
import {App, IonicPage, Nav, NavController} from "ionic-angular";
import {AuthService} from "../pages/auth/auth.service";
import {LocationsPage} from "../pages/admin/location/locations";
import {SigninPage} from "../pages/auth/signin/signin";
import {RetailersPage} from "../pages/admin/retailer/retailer";
import {SchedulePage} from "../pages/schedule/schedule.component";
import {ProductsPage} from "../pages/admin/products/products";
import {BrandsPage} from "../pages/admin/brand/brands";
import {UserListPage} from "../pages/admin/users/user-list/user-list";
import {User} from "../models/User";

@Component({
  selector: 'page-menu',
  templateUrl: 'app.menu.component.html'
})
export class AppMenuPage {

  rootPage: any;
  pages = [];
  user: User;

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController,
              private authService: AuthService,
              private appCtrl: App) {}

  ionViewCanEnter() {
    return this.authService.isLoggedIn();
  }

  ionViewWillEnter() {
    this.user = this.authService.user;

    if(this.authService.isAdmin()) {
      this.pages = [
        {title: 'Visits', component: SchedulePage, icon: 'calendar'},
        {title: 'User Management', component: UserListPage, icon: 'people'},
        {title: 'Brands', component: BrandsPage, icon: 'brush'},
        {title: 'Products', component: ProductsPage, icon: 'cube'},
        {title: 'Locations', component: LocationsPage, icon: 'navigate'},
        {title: 'Retailers', component: RetailersPage, icon: 'basket'},
      ];
      this.openPage(SchedulePage);
    } else {
      this.pages = [
        {title: 'Visits', component: SchedulePage, icon: 'calendar'}
      ];
      this.openPage(SchedulePage);
    }
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  signOut() {
    this.appCtrl.getRootNav().setRoot(SigninPage);
    this.authService.signOut();
  }
}
