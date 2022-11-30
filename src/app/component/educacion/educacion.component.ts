import { Component, OnInit } from '@angular/core';
import { DatosOfflineService } from 'src/app/servicios/datos-offline.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
misDatos:any;
  constructor(private servicio:DatosOfflineService) {
    this.servicio.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
    })
   }

  ngOnInit(): void {
  }

}
