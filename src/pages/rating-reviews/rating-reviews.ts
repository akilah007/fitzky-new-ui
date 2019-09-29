import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-rating-reviews',
  templateUrl: 'rating-reviews.html',
})
export class RatingReviewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingReviewsPage');
  }

}
