import {ErrorHandler, NgModule} from "@angular/core";
import {BrandsPage} from "./brand/brands";
import {BrowserModule} from "@angular/platform-browser";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {HttpClientModule} from "@angular/common/http";
import {BrandsService} from "./brand/brands.service";
import {BrandModal} from "./brand/brand-modal";
import {ProductsService} from "./products/products.service";
import {ProductsPage} from "./products/products";

@NgModule({
  declarations: [
    BrandsPage,
    BrandModal,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    HttpClientModule
  ],
  entryComponents: [
    BrandsPage,
    BrandModal,
    ProductsPage
  ],
  providers: [
    BrandsService,
    ProductsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AdminModule {}
