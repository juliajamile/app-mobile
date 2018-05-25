//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private baseApiPathUsuarios = 'http://35.199.101.182/api/usuarios/';

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  getMatricula(matricula){
    return this.http.get(this.baseApiPathUsuarios + matricula);
  }
}
//170042500
//"https://www.globo.com/"
//http://35.199.101.182/api/usuarios/170042500
