import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service"
import { TextToSpeech } from '@ionic-native/text-to-speech';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

 
  fav: any


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController, private store: Storage,
              private auth: AuthServiceProvider, private text2speech: TextToSpeech) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');

   this.auth.getFavourites().then((data)=> {
     this.fav = data
     console.log(this.fav)
   })
    
  }


  search() {
    let modal = this.modalCtrl.create('SearchPage')

    modal.present();
  }

  delete(it) {
    this.auth.deleteFav(it)
  }

  speak(data){
    this.text2speech.speak({
      text: data,
      rate: 0.75
    })
  }

}
