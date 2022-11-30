import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
<<<<<<< HEAD
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
=======
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b

const routes: Routes = [
  {path:'inicio', component: AcercadeComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciasComponent},
  {path:'proyectos', component:ProyectosComponent},
<<<<<<< HEAD
  {path:'habilidades', component:HabilidadesComponent},
=======
>>>>>>> 8831d25aaecb5b5a8521f227c8a63f1ee62cb59b
  {path:"", redirectTo:"/inicio", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
