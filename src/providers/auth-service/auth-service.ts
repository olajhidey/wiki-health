import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*import angularfire auth for authentication*/
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceProvider {

    response = {}
  
  constructor( public afauth: AngularFireAuth, public http : Http) {
    
  }

  doLogin(email, password){
    var promise = new Promise((resolve,reject) => {

      this.afauth.auth.signInWithEmailAndPassword(email, password).then(res=> {
        resolve(res)
      }).then(err=> {
        resolve(err);
      })
    })

    return promise
     
  }

  doRegister(email, password): any{
    return this.afauth.auth.createUserWithEmailAndPassword(email,password)
  }

  getDetails() {
    return this.http.get('assets/data/data.json').map((res) => res.json())  
  }

  

}
