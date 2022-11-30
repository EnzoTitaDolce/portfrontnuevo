import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
<<<<<<< HEAD
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
=======
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    ProyectosComponent,
<<<<<<< HEAD
    ExperienciasComponent,
    HabilidadesComponent    
=======
    ExperienciasComponent    
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
