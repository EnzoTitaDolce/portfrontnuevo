import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EducacionComponent,
    ProyectosComponent,
    ExperienciasComponent,
    HabilidadesComponent    
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
