import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth, private loadCtrl: LoadingController, private nav: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

 goToRef() {
   
  this.navCtrl.push('ReferencePage')

 }

 goToAbout() {
   this.navCtrl.push('AboutPage')
 }

 signOut() {
   
    let load = this.loadCtrl.create({
      content: 'Loading'
    })

    load.present()

    this.auth.auth.signOut().then(res=> {
      load.dismiss() 
      localStorage.removeItem('userid')
      this.nav.getRootNavById('LoginPage')
    }).catch(err => {
      load.dismiss()
      alert(err.message)
    })
 }
}
