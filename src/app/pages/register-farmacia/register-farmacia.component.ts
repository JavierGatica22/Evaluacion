import { Component, OnInit } from '@angular/core';
import { IFarmacia } from 'src/services/IFarmacia';
import { FarmaciaServicesService } from 'src/services/farmacia-service.service';
@Component({
  selector: 'app-register-farmacia',
  templateUrl: './register-farmacia.component.html',
  styleUrls: ['./register-farmacia.component.scss'],
})
export class RegisterFarmaciaComponent implements OnInit {

  public farmacia:IFarmacia={
    run:"" ,
    NombreUsuario:"",
    contrasena:"",
    NumFolio:""

  }
  private servicioFarmacia:FarmaciaServicesService;

  constructor(servicio:FarmaciaServicesService) {
    this.servicioFarmacia=servicio;

  }
  enviarFarmacia() {
    
    this.servicioFarmacia.agregarFarmacia(this.farmacia)
    .subscribe(respuesta => console.log(respuesta))
}

  ngOnInit() {}

}
