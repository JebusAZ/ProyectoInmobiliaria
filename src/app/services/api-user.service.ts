import { HttpClient  , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginI} from '../Modelos/login.interface'
import { ResponseI} from '../Modelos/response.interface'
import { Observable } from 'rxjs';
import { UsuarioI } from '../Modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private http: HttpClient) {}

  url:string = 'https://localhost:44340/api/Usuarios/'


    newUser(params:any) //CREAR USUARIO TATUADO
    {
      let direccion = this.url + "crearUsuario";
      return this.http.post(direccion, params)
    }

    nuevoUsuario(form: UsuarioI) //CREAR USUARIO FORM
    {
      let direccion = this.url + "crearUsuario";
      return this.http.post<ResponseI>(direccion,form);
    }

    loginByEmail(form: LoginI):Observable<ResponseI> //LOGIN FORM
    {
      let direccion = this.url + "login";
      return this.http.post<ResponseI>(direccion,form);
    }

    //consultarLogin(params:any) //BUSCAR POR EMAIL TATUADO
   // {
    //  let direccion = this.url + "buscarUsuarioByEmail?";
    //  return this.http.get(direccion, params);
   // }






}
