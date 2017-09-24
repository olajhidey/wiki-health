import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthServiceProvider, public loadCtrl: LoadingController,
            public alertCtrl : AlertController, public afauth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    
  }

  goToRegister(){
    this.navCtrl.push('RegisterPage')
  }

  doLogin(email,password) {

    let alert = this.alertCtrl

    let load = this.loadCtrl.create({
      content: 'Loading'
    }) 

    load.present()

    this.afauth.auth.signInWithEmailAndPassword(email, password).then(res=> {

      load.dismiss()

      this.navCtrl.setRoot("TabsPage")

    }).catch(err=> {

      alert.create({
        title: err.name,
        message: err.message,
        buttons: ['ok']
      }).present()
      
      load.dismiss()
    })

    



 

   
  }

}
