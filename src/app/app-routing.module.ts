import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';

const routes: Routes = [
  {path:'inicio', component: AcercadeComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciasComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:"", redirectTo:"/inicio", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
