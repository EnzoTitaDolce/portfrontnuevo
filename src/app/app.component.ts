import { Component } from '@angular/core';
import { DatosOfflineService } from './servicios/datos-offline.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioNuevo';
  misDatos:any;
  constructor(private datosService:DatosOfflineService){
    this.datosService.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
      console.log(this.misDatos)
    })
  }
}
