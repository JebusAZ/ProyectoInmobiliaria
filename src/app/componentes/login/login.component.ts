import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiUserService} from '../../services/api-user.service'
import { LoginI } from '../../Modelos/login.interface'
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
   selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  //FORM LOGIN
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    contraseña : new FormControl('', Validators.required)
  })

  constructor(private authSvc: AuthService , private api: ApiUserService) { }

  ngOnInit(): void {
  }

  ///LOGIN GOOGLE INICIO
  async login(){
    await this.authSvc.loginUser();
    console.log('Login component: login: click: success: ', this.authSvc.userloggedIn);
  }

///LOGIN FORM
  onLogin(form:LoginI){
//console.log(form); //consulta formulario
    this.api.loginByEmail(form).subscribe(data => console.log(data)); //cosulta api
    //servicio api y funciones

  }

///BUSCAR USUARIO POR EMAIL TATUADO INICIO !! CAMBIAR FNC BOTON
  //searchByEmail(){
   /// const email = {
    //  "email": "correo@correo.com"
//}
    //this.api.consultarLogin(email).subscribe((result: any)=> {
   //   console.log('Login component: BYEMAIL : result: ', result);
  //  })
 // } ///FINAL


}
