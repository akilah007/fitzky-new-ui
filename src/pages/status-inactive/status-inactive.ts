import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-status-inactive',
  templateUrl: 'status-inactive.html',
})
export class StatusInactivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusInactivePage');
  }

}
