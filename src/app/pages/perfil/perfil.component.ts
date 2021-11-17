import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from 'src/services/IUsuario';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  



  constructor(private cliente:HttpClient, private ruta:ActivatedRoute) {
     
  }
  private url:string = ' http://localhost:3000/usuario';

   public usuario:IUsuario;
    idActual:number;
    Nombre:string;
    correo:string;
    direccion:string;
    codigoPostal:string;
   
  
  


  ngOnInit(){
this.ruta.paramMap.subscribe((params)=>{ this.idActual= +params.get('id');}); 
this.cliente.get<any>(this.url).subscribe((respuesta)=>{
  const usuario=respuesta.find((a:any)=>{
    return a.id===1;
  });
  if (usuario) {
    this.Nombre = usuario.NombreUsuario;
    this.correo = usuario.correo;
    this.direccion = usuario.direccion;
    this.codigoPostal= usuario.codigoPostal;
    
  }
});

  }
    

}
