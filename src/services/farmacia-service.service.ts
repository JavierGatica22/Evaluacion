import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFarmacia } from './IFarmacia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaServicesService {
  private url:string = ' http://localhost:3000/farmacia';
  private httpClient: HttpClient;
  constructor(farmacia:HttpClient) { 
    this.httpClient=farmacia
  }
  public obtenerFarmacias(): Observable<Array<IFarmacia>> {
    return this.httpClient.get<Array<IFarmacia>>(this.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public agregarFarmacia(nuevaFarmacia: IFarmacia): Observable<IFarmacia> {
    return this.httpClient.post<IFarmacia>(this.url, JSON.stringify(nuevaFarmacia), {
      headers: {
        "Content-Type":"application/json"
      }
    })
  }
}
