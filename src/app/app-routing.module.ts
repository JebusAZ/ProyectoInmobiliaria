import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { PublishFormComponent } from './componentes/publish-form/publish-form.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { HomeComponent } from './componentes/home/home.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';



export const routes: Routes = [
    {path: '', redirectTo: 'inmuebles', pathMatch:'full'},
    {path:'inmuebles', component: ArticulosComponent},
    {path:'producto', component: ProductoComponent},
    {path:'login', component:LoginComponent},
    {path:'form', component: PublishFormComponent},
    {path:'nosotros', component:NosotrosComponent},
    {path:'inicio', component:HomeComponent},
    {path:'usuario', component:UsuarioComponent}
]
//no hagas push hasta que funcione
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }