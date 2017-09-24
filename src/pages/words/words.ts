import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the WordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage {

  data = {
    id : undefined,
    letter: null
  }

  words = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
  
    this.data = this.navParams.get('data')
    

  
  
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('data')
    let id = this.data.id

    this.auth.getDetails().subscribe(res=> {
      console.log(id)
      this.words = res.word[id]
      console.log(this.words)
    })
   
  }

  goToDef(wrd){
    let data = {
      data: wrd
    }

    this.navCtrl.push('DefinitionPage', data)
  }

}
