import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AdminModule} from "../pages/admin/admin.module";
import {AuthModule} from "../pages/auth/auth.module";
import {StorageService} from "../shared/storage/storage.service";
import {IonicStorageModule} from "@ionic/storage";
import {AlertService} from "../shared/alert/alert.service";
import {ScheduleModule} from "../pages/schedule/schedule.module";
import {MomentModule} from "angular2-moment";
import {AppMenuPage} from "./app.menu.page";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    MyApp,
    AppMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ScheduleModule,
    AdminModule,
    AuthModule,
    MomentModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AppMenuPage
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    AlertService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
