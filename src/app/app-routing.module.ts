import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ServicioComponent } from './servicio/servicio.component';
import { UltrasonidoComponent } from './ultrasonido/ultrasonido.component';
import { CovidComponent } from './covid/covid.component';
import { RayosxComponent } from './rayosx/rayosx.component';
import { MastografiaComponent } from './mastografia/mastografia.component';
import { BdatosComponent } from './bdatos/bdatos.component';
import { CancelarComponent } from './cancelar/cancelar.component';

const routes: Routes = [  {path: '', component:HomeComponent, pathMatch:'full'},
{path: 'servicio', component:ServicioComponent, pathMatch:'full'},
{path: 'paciente', component:PacienteComponent, pathMatch:'full'},
{path: 'preguntas', component:PreguntasComponent, pathMatch:'full'},
{path: 'about', component:AboutComponent, pathMatch:'full'},
{path: 'registrarse', component:RegistrarseComponent, pathMatch:'full'},
{ path: '', redirectTo: 'tutorial', pathMatch: 'full' },
{path: 'ultrasonido', component:UltrasonidoComponent, pathMatch:'full'},
{path: 'covid', component:CovidComponent, pathMatch:'full'},
{path: 'rayox', component:RayosxComponent, pathMatch:'full'},
{path: 'mastografia', component:MastografiaComponent, pathMatch:'full'},
{path: 'bdatos', component:BdatosComponent, pathMatch:'full'},
{path: 'cancelar', component:CancelarComponent, pathMatch:'full'},
{path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
