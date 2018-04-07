import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "../../app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {UserListPage} from "./user-list/user-list";
import {UserEditPage} from "./user-edit/user-edit";
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    UserListPage,
    UserEditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule
  ],
  entryComponents: [
    MyApp,
    UserListPage,
    UserEditPage
  ],
  providers: [
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class UserModule {
}
