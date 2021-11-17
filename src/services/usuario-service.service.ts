import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './IUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicesService {
  private url:string = ' http://localhost:3000/usuario';
  private httpClient: HttpClient;
  constructor(usuario:HttpClient) { 
    this.httpClient=usuario
  }
  public obtenerUsuarios(): Observable<Array<IUsuario>> {
    return this.httpClient.get<Array<IUsuario>>(this.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public agregarUsuarios(nuevoUsuario: IUsuario): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(this.url, JSON.stringify(nuevoUsuario), {
      headers: {
        "Content-Type":"application/json"
      }
    })
  }
}
