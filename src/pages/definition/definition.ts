import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the DefinitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-definition',
  templateUrl: 'definition.html',
})
export class DefinitionPage {

  data = {}

  definition : string
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth :AuthServiceProvider,
     private social: SocialSharing, private clip: Clipboard, private text2speech: TextToSpeech, private toast: ToastController) {
  }

  ionViewDidLoad() {
    
    this.data = this.navParams.get('data')
    
  }

  copy(meaning){
    let toast = this.toast.create({
      message: 'Text copied',
      duration: 3000
    })

    this.clip.copy(meaning).then(()=> {
      toast.present();
    })
  }

  speak(meaning){
    this.text2speech.speak(meaning)
  }

  share(meaning) {
    this.social.share(meaning, 'title')
  }

  favorite(data){
    this.auth.createFav({
      title: data.word,
      meaning: data.meaning
    });

    this.toast.create({
      message: "added to Favourites",
      duration: 3000
    }).present()
  }

}
