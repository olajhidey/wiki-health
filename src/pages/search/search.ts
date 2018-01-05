import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from '@ionic-native/clipboard';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery : string = ''
  items : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private auth: AuthServiceProvider, 
            private social: SocialSharing, private clip: Clipboard, private toastCtrl : ToastController, private text2speech: TextToSpeech) {

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  getItems(ev : any) {

      let id;

      console.log(ev)

    let val = ev.target.value

    

    if(this.searchQuery.toUpperCase().startsWith('A')) {

      id = 1

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
      
          })
        }
              
        })

    }else if(this.searchQuery.toUpperCase().startsWith('B')) {
      id = 2
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
        })
    }else if(this.searchQuery.toUpperCase().startsWith('C')) {
      id = 3
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
        })
    }else if(this.searchQuery.toUpperCase().startsWith('D')) {
      id = 4
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
        })

    }else if(this.searchQuery.toUpperCase().startsWith('E')) {

      id = 5
      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]
        
        if(val && val.trim() != '') {
          this.items =this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
              
    })


    }else if(this.searchQuery.toUpperCase().startsWith('F')) {
      id = 6

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]

        if(val && val.trim() != '') {
          this.items = this.items.filter((item)=> {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('G')) {
      id = 7

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id] 
        
        if(val && val.trim() != '' ) {
          this.items = this.items.filter((item)=> {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('H')) {
      
      id = 8

      this.auth.getDetails().subscribe((res)=> {
        this.items = res.word[id]

        if(val && val.trim() != '') {
          this.items = this.items.filter((item)=> {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('I')) {
      id = 9;

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]

        if(val && val.trim() != "" ) {
          this.items = this.items.filter((item)=> {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })
        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('J')) {
      id = 10;

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]

        if(val && val.trim() != '') {
          this.items = this.items.filter((item)=> {
            return (item.word.toLowerCase().indexOf(val.toLowerCase()) > -1)
          })

        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('K')) {
      id = 11;
      
    this.auth.getDetails().subscribe(res=> {
      this.items = res.word[id]

      if(val && val.trim() != '') {
        this.items = this.items.filter((item)=> {
          return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
        })

      }
    })

    }else if(this.searchQuery.toUpperCase().startsWith('M')) {
      id = 13

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]

        if(val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
          })
        }
      })
    }else if(this.searchQuery.toUpperCase().startsWith('N')) {

      id = 14

      this.auth.getDetails().subscribe(res=> {
        this.items = res.word[id]

        if(val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
          })
        }
      })

    }else if(this.searchQuery.toUpperCase().startsWith('O')) {

      id = 15
      
        this.auth.getDetails().subscribe(res=> {
          this.items = res.word[id]
  
          if(val && val.trim() != '') {
            this.items = this.items.filter((item) => {
              return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
            })
          }
        })
    }else if(this.searchQuery.toUpperCase().startsWith('P')) {


      id = 16
      
        this.auth.getDetails().subscribe(res=> {
          this.items = res.word[id]
  
          if(val && val.trim() != '') {
            this.items = this.items.filter((item) => {
              return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
            })
          }
        })

    }else if(this.searchQuery.toUpperCase().startsWith('Q')) {

      id = 17
      
        this.auth.getDetails().subscribe(res=> {
          this.items = res.word[id]
  
          if(val && val.trim() != '') {
            this.items = this.items.filter((item) => {
              return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
            })
          }
        })

    }else if(this.searchQuery.toUpperCase().startsWith('R')) {
      
            id = 18
            
              this.auth.getDetails().subscribe(res=> {
                this.items = res.word[id]
        
                if(val && val.trim() != '') {
                  this.items = this.items.filter((item) => {
                    return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                  })
                }
              })
      
      }else if(this.searchQuery.toUpperCase().startsWith('S')) {
        
              id = 19
              
                this.auth.getDetails().subscribe(res=> {
                  this.items = res.word[id]
          
                  if(val && val.trim() != '') {
                    this.items = this.items.filter((item) => {
                      return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                    })
                  }
                })
        
        }else if(this.searchQuery.toUpperCase().startsWith('T')) {
          
                id = 20
                
                  this.auth.getDetails().subscribe(res=> {
                    this.items = res.word[id]
            
                    if(val && val.trim() != '') {
                      this.items = this.items.filter((item) => {
                        return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                      })
                    }
                  })
          
        }else if(this.searchQuery.toUpperCase().startsWith('U')) {
          
                id = 21
                
                  this.auth.getDetails().subscribe(res=> {
                    this.items = res.word[id]
            
                    if(val && val.trim() != '') {
                      this.items = this.items.filter((item) => {
                        return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                      })
                    }
                  })
          
      }else if(this.searchQuery.toUpperCase().startsWith('V')) {
        
              id = 22
              
                this.auth.getDetails().subscribe(res=> {
                  this.items = res.word[id]
          
                  if(val && val.trim() != '') {
                    this.items = this.items.filter((item) => {
                      return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                    })
                  }
                })
        
    }else if(this.searchQuery.toUpperCase().startsWith('W')) {
      
            id = 23
            
              this.auth.getDetails().subscribe(res=> {
                this.items = res.word[id]
        
                if(val && val.trim() != '') {
                  this.items = this.items.filter((item) => {
                    return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                  })
                }
              })
      
  }else if(this.searchQuery.toUpperCase().startsWith('X')) {
    
          id = 24
          
            this.auth.getDetails().subscribe(res=> {
              this.items = res.word[id]
      
              if(val && val.trim() != '') {
                this.items = this.items.filter((item) => {
                  return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
                })
              }
            })
    
}else if(this.searchQuery.toUpperCase().startsWith('Y')) {
  
        id = 25
        
          this.auth.getDetails().subscribe(res=> {
            this.items = res.word[id]
    
            if(val && val.trim() != '') {
              this.items = this.items.filter((item) => {
                return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
              })
            }
          })
  
}else if(this.searchQuery.toUpperCase().startsWith('Z')) {
  
        id = 26
        
          this.auth.getDetails().subscribe(res=> {
            this.items = res.word[id]
    
            if(val && val.trim() != '') {
              this.items = this.items.filter((item) => {
                return (item.word.toLowerCase().indexOf(val.toLowerCase())  > -1)
              })
            }
          })
  
}



  

  }

  close(){
    this.viewCtrl.dismiss()
  }

  copy(item) {
    this.clip.copy(item).then(()=> {
      this.toastCtrl.create({
        message: 'text has been copied!'
      }).present()
    })
  }


  share(item) {
    this.social.share(item.meaning, item.word)
  }

  save(item) {
    this.auth.createFav(item)
    this.toastCtrl.create({
      message: 'added to favourites'
    }).present()
  }

  speak(fact){
    this.text2speech.speak({
      text: fact,
      rate: 0.75
    })
  }

}
