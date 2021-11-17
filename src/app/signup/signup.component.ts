import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/services/IUsuario';
import { UsuarioServicesService } from 'src/services/usuario-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public usuario:IUsuario={
    
    NombreUsuario:"",
    correo:"",
    contrasena:"",
    direccion:"",
    codigoPostal:""
   
  }
  private servicioUsuario:UsuarioServicesService;

  constructor(servicio:UsuarioServicesService) {
    this.servicioUsuario=servicio;

  }
  enviarUsuario() {
    
    this.servicioUsuario.agregarUsuarios(this.usuario)
    .subscribe(respuesta => console.log(respuesta))
}
  ngOnInit() {
  }

}
