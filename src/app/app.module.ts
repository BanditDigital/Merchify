import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ScheduleModule} from "../pages/schedule/schedule.module.";
import {AdminModule} from "../pages/admin/admin.module";
import {AuthModule} from "../pages/auth/auth.module";
import {StorageService} from "../shared/storage/storage.service";
import {IonicStorageModule} from "@ionic/storage";
import {HomePageModule} from "../pages/home/home.module";
import {AlertService} from "../shared/alert/alert.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ScheduleModule,
    AdminModule,
    AuthModule,
    HomePageModule
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
