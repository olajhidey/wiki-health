import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AngularFireAuth, private loadCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

    process(email){

      let load = this.loadCtrl.create({
        content: 'Loading'
      })

      load.present()

      this.auth.auth.sendPasswordResetEmail(email).then(res=> {

        load.dismiss()
        this.alertCtrl.create({
          title: 'Success',
          message: 'Check your mail to reset password',
          buttons: ['OK']
        }).present()
      }).catch((err)=> {
        load.dismiss()
        this.alertCtrl.create({
          title: 'Error',
          message: err.message,
          buttons: ['oK']
        }).present()
      })

    }
  

}
