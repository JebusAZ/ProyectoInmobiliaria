import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiUserService} from '../../services/api-user.service'
import { LoginI } from '../../Modelos/login.interface'
import { FormGroup, FormControl, Validators, FormsModule} from '@angular/forms'
import { routes } from 'src/app/app-routing.module';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ResponseI } from 'src/app/Modelos/response.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  

  constructor(private auth: AngularFireAuth,private authSvc: AuthService , private api: ApiUserService, private router: Router) { }

  
  isError = false;
  isErrorMsg = "";

  tokenON = false;

  ngOnInit(): void {
  
  }
 
 


  

  ///LOGIN GOOGLE INICIO
  async login(){
    await this.authSvc.loginUser();
    console.log('Login component: login: click: success: ', this.authSvc.userloggedIn);
    this.router.navigate(['./inmuebles']);
  }

  onLogin(form:LoginI){
      if(this.loginForm.valid){ 
    //console.log(form); //consulta formulario
        this.api.loginByEmail(form).subscribe(data => {

          console.log(data)
      let dataResponse: ResponseI = data;
      if(dataResponse.codigoEstatus == 200)
      {
        console.log('entraste');
        localStorage.setItem("email", dataResponse.objData.email.toString());
       
         this.router.navigate(['./inmuebles']);
        
         
      }
        });
       
    } else{

      this.isErrorMsg = "Campo(s) Vacio(s)"
      console.log("campos vacios");
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 2000);
    }
      }

      

 
}
