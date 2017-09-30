import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery : string = ''
  items : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private auth: AuthServiceProvider) {

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  getItems(ev : any) {

      let id;

    let val = ev.target.value

    

    if(this.searchQuery.toUpperCase().startsWith('A')) {

      id = 1

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
      
          })
        }
              
        })

    }else if(this.searchQuery.toUpperCase().startsWith('B')) {
      id = 2
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
        })
    }else if(this.searchQuery.toUpperCase().startsWith('C')) {
      id = 3
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
        })
    }

  

  }

  close(){
    this.viewCtrl.dismiss()
  }

}
