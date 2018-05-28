import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JantaPage } from '../janta/janta';
import { AlmocoPage } from '../almoco/almoco';



@IonicPage()
@Component({
  selector: 'page-cafe',
  templateUrl: 'cafe.html',
})
export class CafePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafePage');
  }

  doback(){    
    this.navCtrl.push(JantaPage);
  }


  doforward(){    
    this.navCtrl.push(AlmocoPage);
  }


}
