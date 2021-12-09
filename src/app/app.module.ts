import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Firebase modules 
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';

//Components
import { AppComponent } from './app.component';
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
import { PublishFormComponent } from './componentes/publish-form/publish-form.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { RouterModule } from '@angular/router';


//enviroments
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    InmueblesComponent,
    FooterComponent,
    HeroDetaiComponent,
    ArticulosComponent,
    HeaderComponent,
    ProductoComponent,
    LoginComponent,    
    PublishFormComponent, UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.FIREBASE_SETTINGS),
    AngularFireAuthModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
