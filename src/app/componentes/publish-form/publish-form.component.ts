import { Component, OnInit } from '@angular/core';

const url = "http://inmobiliariatuksa.eastus.cloudapp.azure.com/api/Propiedades/agregar"

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.scss']
  
})
export class PublishFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  getBase64($event) {
    let me = this;
    let file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
      
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  
  subirInmueble(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement, precio: HTMLInputElement, categoria: HTMLSelectElement, municipio: HTMLInputElement, direccion: HTMLInputElement, imagen: HTMLInputElement): boolean{
    if(categoria.value == "0"){
      alert("error")
    }
    
    console.log(titulo.value)
    console.log(descripcion.value)
    console.log(precio.value)
    console.log(categoria.value)
    console.log(municipio.value)
    console.log(municipio.value)
    console.log(direccion.value)
    console.log(imagen.namespaceURI)
    
    return false
  }
  
  
}

  


