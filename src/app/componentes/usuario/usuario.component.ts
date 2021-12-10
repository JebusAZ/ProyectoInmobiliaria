import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/services/api-user.service';
import { UsuarioI } from '../../Modelos/usuario.interface'
import { FormGroup, FormControl, Validators} from '@angular/forms'

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

  constructor(private apiSvc: ApiUserService) { }

  ngOnInit(): void {
  }

///AGREGAR USUARIO TATUADO INICIO !! CAMBIAR FUNCIONES EN BOTON
  addUser()
  {
    
      const params = {

      "nombre": "string4",
      "primerApellido": "string4",
      "segundoApellido": "string4",
      "email": "string",
      "contraseña": "string",
      "isOauth": true
      
    }

    this.apiSvc.newUser(params).subscribe((result: any)=> {
      console.log('Usuario component: addUser : result: ', result);
    });
  } ///FINAL

  agregarUsuario(form:UsuarioI){
   // console.log(form); //consulta formulario
    this.apiSvc.nuevoUsuario(form).subscribe(data => console.log(data)); //servicio api y funciones 
    //cosulta api
  }

}
