import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosOfflineService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{

    return this.http.get('../assets/datos.json')

  }
}
