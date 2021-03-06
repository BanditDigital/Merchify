import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthModule} from "../pages/auth/auth.module";
import {StorageService} from "../shared/storage/storage.service";
import {IonicStorageModule} from "@ionic/storage";
import {AlertService} from "../shared/alert/alert.service";
import {ScheduleModule} from "../pages/schedule/schedule.module";
import {MomentModule} from "angular2-moment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppVersion} from "@ionic-native/app-version";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ScheduleModule,
    AuthModule,
    MomentModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MyApp
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    StorageService,
    AlertService,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
