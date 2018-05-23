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
   public lista_extrato = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public extratoProvider: ExtratoPProvider
    ){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtratoPage');
    console.log(this.matriculaExt);

    this.extratoProvider.getHistorico(this.matriculaExt).subscribe
      (
        data=>{
          //console.log(data);
          const response = (data as any);
          const objeto_extrato = JSON.parse(response._body);
          this.lista_extrato = objeto_extrato;
          console.log(objeto_extrato);
          if (data.status == 200)
          {
            console.log("Entrou no if");

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
