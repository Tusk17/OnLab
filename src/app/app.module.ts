import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicioComponent } from './servicio/servicio.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UltrasonidoComponent } from './ultrasonido/ultrasonido.component';
import { CovidComponent } from './covid/covid.component';
import { RayosxComponent } from './rayosx/rayosx.component';
import { MastografiaComponent } from './mastografia/mastografia.component';
import { BdatosComponent } from './bdatos/bdatos.component';
import { CancelarComponent } from './cancelar/cancelar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicioComponent,
    PacienteComponent,
    PreguntasComponent,
    AboutComponent,
    NavbarComponent,
    RegistrarseComponent,
    UltrasonidoComponent,
    CovidComponent,
    RayosxComponent,
    MastografiaComponent,
    BdatosComponent,
    CancelarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
