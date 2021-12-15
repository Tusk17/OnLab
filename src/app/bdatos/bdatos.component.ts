import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import  {ServicioService } from 'src/services/servicio.service';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-bdatos',
  templateUrl: './bdatos.component.html',
  styleUrls: ['./bdatos.component.css']
})
export class BdatosComponent implements OnInit {
  usuario={
    nombreC:'',
    email: '',
    password: '',
    passwordC:''
  }
  tutorials?: Servicio[];
  currentTutorial?: Servicio;
  currentIndex = -1;
  title = '';
//@ViewChild('formulario')formulario!;
form!:FormGroup;
constructor(
  private formBuilder:FormBuilder,private servicioService: ServicioService,private afuauth: AngularFireAuth
) { 
  this.afuauth.onAuthStateChanged((user) => {
    if (user){
      var uid=user.uid;
      this.usuario.email=uid
      
    }else {}
  }) 
}
refreshList(): void {
  this.currentTutorial = undefined;
  this.currentIndex = -1;
  this.modificar();
}
setActiveTutorial(tutorial: Servicio, index: number): void {
  this.currentTutorial = tutorial;
  this.currentIndex = index;
}
modificar(): void {
  console.log(this.usuario.email)
  this.servicioService.getAll(this.usuario.email).snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.tutorials = data;
  });
  Swal.fire(
    'Obteniendo','las citas','success'
  )
  }

 ngOnInit(): void {
 }

}
