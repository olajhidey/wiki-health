import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth'

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  data = []

  @ViewChild(Nav) nav : Nav
  rootPage:any 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthServiceProvider, private afauth: AngularFireAuth) {
    this.auth.getDetails().subscribe(data => {
      this.data = data.data
    })
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#488aff');
      splashScreen.hide();
    });

    this.checkAuthorization()
  }

  checkAuthorization() {
    
      this.afauth.auth.onAuthStateChanged((user)=> {
            if(user){
              this.rootPage = LoginPage;
            }else{
              this.rootPage = 'TabsPage'
            }
          })
         
      }

  goToWord(i){
    let data = {
      data: i
    }

    this.nav.push('WordsPage', data);
    console.log(i)
  }
}

