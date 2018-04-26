import {ErrorHandler, NgModule} from "@angular/core";
import {BrandsPage} from "./brand/brands";
import {BrowserModule} from "@angular/platform-browser";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrandsService} from "./brand/brands.service";
import {BrandModal} from "./brand/brand-modal";
import {ProductsService} from "./products/products.service";
import {ProductsPage} from "./products/products";
import {TokenInterceptor} from "../auth/token.interceptor";
import {ProductModal} from "./products/product-modal";
import {UserEditPage} from "./users/user-edit/user-edit";
import {UserListPage} from "./users/user-list/user-list";
import {UserService} from "./users/user.service";
import {AccountsPage} from "./accounts/accounts";
import {AccountModal} from "./accounts/account-modal";
import {AccountService} from "./accounts/account.service";
import {LocationModal} from "./locations/location-modal";
import {LocationsPage} from "./locations/locations";
import {LocationService} from "./locations/location.service";

@NgModule({
  declarations: [
    BrandsPage,
    BrandModal,
    ProductsPage,
    ProductModal,
    UserEditPage,
    UserListPage,
    AccountsPage,
    AccountModal,
    LocationsPage,
    LocationModal
  ],
  imports: [
    BrowserModule,
    IonicModule,
    HttpClientModule
  ],
  entryComponents: [
    BrandsPage,
    BrandModal,
    ProductsPage,
    ProductModal,
    UserListPage,
    UserEditPage,
    AccountsPage,
    AccountModal,
    LocationsPage,
    LocationModal
  ],
  providers: [
    BrandsService,
    ProductsService,
    UserService,
    AccountService,
    LocationService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AdminModule {}
