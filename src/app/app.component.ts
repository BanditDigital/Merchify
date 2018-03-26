import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any, icon: string}>;
  adminPages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Schedule', component: 'ScheduleVisitPage', icon: 'calendar' },
      { title: 'Check-in', component: 'VisitPage', icon: 'clock' },
      { title: 'Visit Archive', component: 'VisitArchivePage', icon: 'filing' },
      { title: 'Update My Details', component: 'UserProfilePage', icon: 'contact' },
      { title: 'Sign Out', component: HomePage, icon: 'exit' }
    ];

    this.adminPages = [
      { title: 'View Dashboard', component: 'AdminDashboardPage', icon: 'pie' },
      { title: 'Manage Users', component: 'UserListPage', icon: 'people' },
      { title: 'Edit Brands', component: HomePage, icon: 'brush' },
      { title: 'Edit Retailers', component: HomePage, icon: 'basket' },
      { title: 'Edit Locations', component: HomePage, icon: 'map' },
      { title: 'Edit Products', component: HomePage, icon: 'cube' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
