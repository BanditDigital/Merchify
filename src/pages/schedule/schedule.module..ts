import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "../../app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {SchedulePage} from "./schedule";


@NgModule({
  declarations: [
    SchedulePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule
  ],
  entryComponents: [
    MyApp,
    SchedulePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ScheduleModule {
}
