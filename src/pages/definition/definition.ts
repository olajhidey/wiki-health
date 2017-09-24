import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth :AuthServiceProvider) {
  }

  ionViewDidLoad() {
    
    this.data = this.navParams.get('data')
    
  }

}
