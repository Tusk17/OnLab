import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import { ServicioService } from 'src/services/servicio.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-ultrasonido',
  templateUrl: './ultrasonido.component.html',
  styleUrls: ['./ultrasonido.component.css']
})
export class UltrasonidoComponent implements OnInit {
  servicio: Servicio = new Servicio();
 //@ViewChild('formulario')formulario!;
 form!:FormGroup;
 constructor(
   private formBuilder:FormBuilder,private servicioService: ServicioService,
   private afuauth: AngularFireAuth
 ) { 
   this.formulario();
   this.afuauth.onAuthStateChanged((user) => {
    if (user){
      var uid=user.uid;
      this.servicio.uid=uid
    }else {}
  })
 }
 saveUltra(): void {
  this.servicioService.create(this.servicio).then(() => {
    console.log('Created new item successfully!');
  });
  Swal.fire(
    '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
  )
}
 persona={
   genero:'F'
 }
 formulario(){
  this.form=this.formBuilder.group({
    prueba: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    hora:['',[Validators.required]],
    nombre: ['',[Validators.required]],
    apellidopaterno: ['',[Validators.required]],
    apellidomaterno: ['',[Validators.required]],
    nacimiento:['',[Validators.required]],
    cp:['',[Validators.required]],
    colonia:['',[Validators.required]],
    calle:['',[Validators.required]],
    numdir:['',[Validators.required]],
    correo: ['',[Validators.required]],
    tel:['',[Validators.required]],
    genero:['',[Validators.required]],
  });
  }
  ngOnInit(): void {
  }

}
