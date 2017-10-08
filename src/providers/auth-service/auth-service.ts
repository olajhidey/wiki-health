import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*import angularfire auth for authentication*/
import { AngularFireAuth } from 'angularfire2/auth';

import PouchDB from 'pouchdb';

@Injectable()
export class AuthServiceProvider {

    response = {}

    data: any
    db: any
    remote : any
  
  constructor( public afauth: AngularFireAuth, public http : Http) {

    this.db = new PouchDB('favourites')

    this.remote = 'http://localhost:5984/favourites'

    let options = {
      live : true,
      retry: true,
      continuous : true
    };

    this.db.sync(this.remote, options)
    
  }


  getFavourites() {

    if(this.data) {
      return Promise.resolve(this.data)
    }

    return new Promise(resolve=> {

      this.db.allDocs({

        include_docs : true

      }).then((result)=> {

        this.data = []

        let docs = result.rows.map((row)=> {
          this.data.push(row.doc);
        });

        resolve(this.data)

        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });
      })
    }).catch((error) => {
      console.log(error);
    })

  }

  createFav(fav) {

    this.db.post(fav)

  }

  deleteFav(fav) {

    this.db.remove(fav).catch((err) => {
      console.log(err)
    })

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

  handleChange(change){
    
     let changedDoc = null;
     let changedIndex = null;
    
     this.data.forEach((doc, index) => {
    
       if(doc._id === change.id){
         changedDoc = doc;
         changedIndex = index;
       }
    
     });
    
     //A document was deleted
     if(change.deleted){
       this.data.splice(changedIndex, 1);
     }
     else {
    
       //A document was updated
       if(changedDoc){
         this.data[changedIndex] = change.doc;
       }
    
       //A document was added
       else {
         this.data.push(change.doc);
       }
    
     }
    
   }
  

}
