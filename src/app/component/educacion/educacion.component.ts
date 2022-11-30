import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DatosOfflineService } from 'src/app/servicios/datos-offline.service';
=======
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
<<<<<<< HEAD
misDatos:any;
  constructor(private servicio:DatosOfflineService) {
    this.servicio.obtenerDatos().subscribe(data=>{
      this.misDatos=data;
    })
   }
=======

  constructor() { }
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b

  ngOnInit(): void {
  }

}
