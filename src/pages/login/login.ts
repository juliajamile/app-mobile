import { Component } from '@angular/core';
import {NavController, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    LoginProvider
  ]
})
export class LoginPage {

  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    private loginProvider: LoginProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.menu.swipeEnable(false);
  }

 public myMatricula;
 public nomeUsuario;
 public saldoUsuario;


  login(){


    console.log(this.myMatricula);
    this.loginProvider.getMatricula(this.myMatricula).subscribe
      (

        data=>{
          //console.log(data);
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          console.log(objeto_retorno);
          if (data.status == 200)
          {
            console.log("Entrou no if");
            this.nomeUsuario = objeto_retorno.NOME_USUARIO;
            this.saldoUsuario = objeto_retorno.SALDO;
            this.myMatricula = objeto_retorno.MATRICULA;
            localStorage.setItem("nome",this.nomeUsuario);
            localStorage.setItem("saldo",this.saldoUsuario);
            localStorage.setItem("matricula",this.myMatricula);
            //console.log();
           // this.navCtrl.push(HomePage);
            this.navCtrl.push( TabsPage );
          }
          else if(data.status == 206)
          {
            console.log("Entrou no else");
            alert("Matricula Invalida");            
          }
        },
        error=>{
          console.log(error);
        }
      )

  }

}
