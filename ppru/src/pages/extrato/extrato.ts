import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExtratoPProvider } from '../../providers/extrato-p/extrato-p';

/**
 * Generated class for the ExtratoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrato',
  templateUrl: 'extrato.html',
  providers: [
    ExtratoPProvider
  ]
})
export class ExtratoPage {

   public matriculaExt = localStorage.getItem("matricula");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public extratoProvider: ExtratoPProvider
    ){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
    console.log(this.matriculaExt);
  }

  extrato(){
    this.extratoProvider.getHistorico(this.matriculaExt).subscribe
      (
        data=>{
          //console.log(data);
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);
          if (data.status == 200)
          {
            console.log("Entrou no if");
           /* this.nomeUsuario = objeto_retorno.NOME_USUARIO;
            this.saldoUsuario = objeto_retorno.SALDO;
            localStorage.setItem("nome",this.nomeUsuario);
            localStorage.setItem("saldo",this.saldoUsuario);
            localStorage.setItem("matricula",this.saldoUsuario);
            //console.log();
            this.navCtrl.push(HomePage);*/
          }
          else if(data.status == 206)
          {
            console.log("Entrou no else");
          }
        },
        error=>{
          console.log(error);
        }
      )

  }

}
