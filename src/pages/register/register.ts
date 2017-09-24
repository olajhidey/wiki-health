import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  register= {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public afauth: AngularFireAuth,
              public loadCtrl: LoadingController, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  doRegister(email, password) {

    let load = this.loadCtrl.create({
      content: 'Loading'
    })


    load.present() 

    this.afauth.auth.createUserWithEmailAndPassword(email,password).then((res)=> {

        load.dismiss()
        
      this.alertCtrl.create({
        title: 'Success',
        message: 'Account created successfully',
        buttons: ['ok']
      }).present()

    }).catch(err=> {
      
      load.dismiss()

      this.alertCtrl.create({
        title: 'Error',
        message: err.message
      }).present()

    })
  }

}
