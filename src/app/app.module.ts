import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InmueblesComponent } from './componentes/inmuebles/inmuebles.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetaiComponent } from './hero-detai/hero-detai.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { LoginComponent } from './componentes/login/login.component';
=======
import { PublishFormComponent } from './publish-form/publish-form.component';
>>>>>>> gibran

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    InmueblesComponent,
    FooterComponent,
    HeroDetaiComponent,
    ArticulosComponent,
    HeaderComponent,
    ProductoComponent,
    LoginComponent
=======
    PublishFormComponent
>>>>>>> gibran
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
