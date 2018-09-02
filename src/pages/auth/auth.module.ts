import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {SigninPage} from "./signin/signin";
import {SignupPage} from "./signup/signup";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {SignupErrorPage} from "./signup/error.modal";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  declarations: [
    SigninPage,
    SignupPage,
    SignupErrorPage
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    IonicModule,
    OrderModule
  ],
  entryComponents: [
    SigninPage,
    SignupPage,
    SignupErrorPage
  ],
  providers: [
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AuthModule {}
