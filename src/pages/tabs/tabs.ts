import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: string = "BookPage"
  tab2: string = "FavoritePage"
  tab3: string = "SettingsPage"

  
  mySelectedIndex: number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.mySelectedIndex = navParams.data.tabIndex || 0;
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
