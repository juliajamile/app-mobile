import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {CompraPage} from '../compra/compra';
import {ExtratoPage} from '../extrato/extrato';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
  }

   // login and go to home page
  docompra() {
    this.nav.setRoot(CompraPage);
  }

  doextrato(){
 	this.nav.setRoot(ExtratoPage);
  }

}
