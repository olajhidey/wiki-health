import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  data = [];
  myData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {

    this.auth.getDetails()

  }

  ionViewDidLoad() {
    this.auth.getDetails()
  }

  goToWord(i) {
    let data = {
      data: i
    }

    this.navCtrl.push('WordsPage', data);
    console.log(i)
  }

}
