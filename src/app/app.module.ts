import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsuarioServicesService } from 'src/services/usuario-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatsComponent } from './pages/chats/chats.component';
import { IniciadoComponent } from './pages/iniciado/iniciado.component';
import { ListadoFarmaciasComponent } from './pages/listadofarmacias/listadoFarmacias.component';
import { LoginFarmaceuticoComponent } from './pages/login-farmaceutico/login-farmaceutico.component';
import { MapsComponent } from './pages/maps/maps.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterFarmaciaComponent } from './pages/register-farmacia/register-farmacia.component';
import { FarmaciaServicesService } from 'src/services/farmacia-service.service';




@NgModule({
  declarations: [		
      AppComponent,
      LoginComponent,
      SignupComponent,
      ChatsComponent,
      IniciadoComponent,
      ListadoFarmaciasComponent,
      LoginFarmaceuticoComponent,
      MapsComponent,
      PerfilComponent,
      RegisterFarmaciaComponent
      
   ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UsuarioServicesService,FarmaciaServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
