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

  id : any

  data = {
    id : undefined,
    letter: null
  }

  words = []
  items = []
  openSearchbar = false

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
  
    this.data = this.navParams.get('data')
    
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('data')
    this.id = this.data.id

    this.auth.getDetails().subscribe(res=> {
      
      this.words = res.word[this.id]
      
      console.log(this.words)
    })
   
  }

  getItem(ev: any) {

    let val = ev.target.value

    this.auth.getDetails().subscribe(res=> {
      this.words = res.word[this.id]

      if(val && val.trim() != '') {
        this.words = this.words.filter((item)=> {
          return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
        })
      }
    })
  }

  openSearch() {
    this.openSearchbar = true
  }

  cancel(){
    this.openSearchbar = false
  }

  goToDef(wrd){
    let data = {
      data: wrd
    }

    this.navCtrl.push('DefinitionPage', data)
  }

}
