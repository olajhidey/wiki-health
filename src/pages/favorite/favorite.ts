import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  item : string


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController, private store: Storage) {
    
      this.getFav();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');

    
  }

  getFav(){

    this.store.get('favourite').then((val)=> {
      this.item = val
    })
  }

  search() {
    let modal = this.modalCtrl.create('SearchPage')

    modal.present();
  }

  delete(it) {
    this.store.remove('favourite')
  }

}
