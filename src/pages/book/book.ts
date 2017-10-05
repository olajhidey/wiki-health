import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Storage } from '@ionic/Storage';
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
  facts = {};
  changeColor = false;
  myData;
  search = false

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, 
    private social : SocialSharing, private clip: Clipboard, private text2speech: TextToSpeech, private toast: ToastController, private modal: ModalController
    ,public store: Storage) {

    let i = Math.floor(Math.random() * 10 );

    this.auth.getDetails().subscribe(res => {
      this.data = res.data
      this.facts = res.facts[i].data
     
    })

  }

  ionViewDidLoad() {
    this.auth.getDetails()
  }

  doSearch() {
    let modal = this.modal.create('SearchPage')

    modal.present();
  }

  copy(fact) {
    let toast = this.toast.create({
      message: 'Text copied',
      duration: 3000
    })

    this.clip.copy(fact).then(()=> {
      toast.present()
    })

  }

  speak(fact){
    this.text2speech.speak(fact)
  }

  share(fact){
    this.social.share(fact, 'Fact for the day');
  }

  favorite(fact : any) {

    this.store.set('favourite', fact).then(()=> {
      this.toast.create({
        message: "added to Favourites",
        duration: 3000
      }).present()
    })

  }

  goToWord(i) {
    let data = {
      data: i
    }

    this.navCtrl.push('WordsPage', data);
    console.log(i)
  }


}
