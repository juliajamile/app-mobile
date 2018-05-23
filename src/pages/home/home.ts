import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';
import { ExtratoPage } from '../extrato/extrato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myName = localStorage.getItem("nome");
  public mySaldo = localStorage.getItem("saldo");
  //public mySaldo = localStorage.getItem("saldo");

  constructor(public navCtrl: NavController) {

  }
  // login and go to home page
  docompra(){
   this.navCtrl.push( CompraPage);
  }

  doextrato(){   
 	 this.navCtrl.push(ExtratoPage);
  }

}
