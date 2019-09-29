import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MyMembershipsPage} from "../pages/my-memberships/my-memberships";
import {StatusActivePage} from "../pages/status-active/status-active";
import {StatusInactivePage} from "../pages/status-inactive/status-inactive";
import {RatingReviewsPage} from "../pages/rating-reviews/rating-reviews";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyMembershipsPage,
    StatusActivePage,
    StatusInactivePage,
    RatingReviewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyMembershipsPage,
    StatusActivePage,
    StatusInactivePage,
    RatingReviewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
