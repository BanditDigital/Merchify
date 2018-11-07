import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {SigninPage} from "./signin/signin";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule,
    OrderModule
  ],
  entryComponents: [
    SigninPage,
  ],
  providers: [
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AuthModule {
}
