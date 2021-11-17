import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { IniciadoComponent } from './pages/iniciado/iniciado.component';
import { ListadoFarmaciasComponent } from './pages/listadofarmacias/listadoFarmacias.component';
import { LoginFarmaceuticoComponent } from './pages/login-farmaceutico/login-farmaceutico.component';
import { MapsComponent } from './pages/maps/maps.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterFarmaciaComponent } from './pages/register-farmacia/register-farmacia.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login-farmaceutico',
    component: LoginFarmaceuticoComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'chats',
    component: ChatsComponent
  },
  {
    path: 'iniciado',
    component:IniciadoComponent
  },
  {
    path: 'perfil/1',
    component: PerfilComponent
  },
  {
    path: 'listadofarmacias',
    component: ListadoFarmaciasComponent
  },
  {
    path: 'register-farmacia',
    component: RegisterFarmaciaComponent
  },
 

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
