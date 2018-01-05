import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public unregisterBackButtonAction: any;

  login = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthServiceProvider, public loadCtrl: LoadingController,
            public alertCtrl : AlertController, public afauth : AngularFireAuth, private platform: Platform) {
  }

  ionViewDidLoad() {
    this.initializeBackButtonCustomHandler();
    
  }

  ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}

  goToRegister(){
    this.navCtrl.push('RegisterPage')
  }

  doLogin(email,password) {

    let load = this.loadCtrl.create({
      content: 'Loading',
      enableBackdropDismiss: true
    }) 

    load.present()

    this.afauth.auth.signInWithEmailAndPassword(email, password).then(res=> {

      localStorage.setItem('userid', this.afauth.auth.currentUser.uid)

      load.dismiss()

      this.navCtrl.setRoot("TabsPage")

    }).catch(err=> {

      load.dismiss()
      this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      }).present()
      // load.dismiss()

      // this.alertCtrl.create({
      //   title: 'Error',
      //   message: err.message,
      //   buttons: ['Ok']
      // }).present()
      
    })
  }

  fgtPass() {
    this.navCtrl.push('ForgotPage')
  }
  
     initializeBackButtonCustomHandler(): void {
         this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
             console.log('Prevent Back Button Page Change');
         }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
     }       

}
