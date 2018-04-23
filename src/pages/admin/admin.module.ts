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

@NgModule({
  declarations: [
    BrandsPage,
    BrandModal,
    ProductsPage,
    ProductModal,
    UserEditPage,
    UserListPage
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
    UserEditPage
  ],
  providers: [
    BrandsService,
    ProductsService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AdminModule {}
