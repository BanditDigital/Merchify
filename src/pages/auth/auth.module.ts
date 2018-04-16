import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {SigninPage} from "./signin/signin";
import {SignupPage} from "./signup/signup";
import {ForgotPage} from "./forgot/forgot";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {SignupErrorPage} from "./signup/error.modal";

@NgModule({
  declarations: [
    SigninPage,
    SignupPage,
    ForgotPage,
    SignupErrorPage
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    IonicModule
  ],
  entryComponents: [
    SigninPage,
    SignupPage,
    ForgotPage,
    SignupErrorPage
  ],
  providers: [
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AuthModule {}
