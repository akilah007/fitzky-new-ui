import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {MyMembershipsPage} from "../pages/my-memberships/my-memberships";
import {StatusActivePage} from "../pages/status-active/status-active";
import {StatusInactivePage} from "../pages/status-inactive/status-inactive";
import {RatingReviewsPage} from "../pages/rating-reviews/rating-reviews";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = RatingReviewsPage;

  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Memberships', component: MyMembershipsPage },
      { title: 'Status Active', component: StatusActivePage },
      { title: 'Status Inactive', component: StatusInactivePage },
      { title: 'Ratings & Reviews', component: RatingReviewsPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

