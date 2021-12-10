import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';
import { UsuarioI } from '../../Modelos/usuario.interface'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

   //FORM USER
   userForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    primerApellido : new FormControl('', Validators.required),
    segundoApellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required)
  })

  constructor(private apiSvc: ApiUserService,private router: Router) { }
 
  isError = false;
  isErrorMsg = "";

  ngOnInit(): void {
  }


  agregarUsuario(form:UsuarioI){
    if(this.userForm.valid){
   // console.log(form); //consulta formulario
    this.apiSvc.nuevoUsuario(form).subscribe(data => console.log(data)); 
    this.router.navigate(['./login']);
    //consulta api y funciones 
    
  }else {
      this.isErrorMsg = "Campo(s) Vacio(s)"
      console.log("campos vacios");
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 2000);
     }
    }
}
