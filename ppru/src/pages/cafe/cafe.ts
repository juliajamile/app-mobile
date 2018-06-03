import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cafe',
  templateUrl: 'cafe.html',
})
export class CafePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cardapio: string = "cafe";
  isAndroid: boolean = false;

}
