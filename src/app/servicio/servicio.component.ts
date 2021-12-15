import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import { ServicioService } from 'src/services/servicio.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  servicio: Servicio = new Servicio();
 //@ViewChild('formulario')formulario!;
form!:FormGroup;
constructor(private servicioService: ServicioService,
  private formBuilder:FormBuilder,private afuauth: AngularFireAuth
  ) { 
    this.afuauth.onAuthStateChanged((user) => {
      if (user){
        var uid=user.uid;
        this.servicio.uid=uid
      }else {}
    }) 
}
saveServicio(): void {
  this.servicioService.create(this.servicio).then(() => {
    console.log('Created new item successfully!');
  });
  Swal.fire(
    '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
  )
}
  ngOnInit(): void {
  }

}
