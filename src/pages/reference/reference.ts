import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'
/**
 * Generated class for the ReferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reference',
  templateUrl: 'reference.html',
})
export class ReferencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab : InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferencePage');
  }


  openWeb() {

  this.iab.create("https://www.medicinenet.com",
    '_blank'
    )
  }

}
