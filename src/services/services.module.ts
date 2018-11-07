import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler} from "ionic-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrandsService} from "./brand/brands.service";
import {ProductsService} from "./products/products.service";
import {LocationsService} from "./location/locations.service";
import {RetailerService} from "./retailer/retailer.service";
import {TokenInterceptor} from "../pages/auth/token.interceptor";
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    HttpClientModule,
    MomentModule,
  ],
  providers: [
    LocationsService,
    RetailerService,
    BrandsService,
    ProductsService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ServicesModule {}
