import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import { ServicioService } from 'src/services/servicio.service';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  servicio: Servicio = new Servicio();
//@ViewChild('formulario')formulario!;
form!:FormGroup;
constructor(
  private formBuilder:FormBuilder,private servicioService: ServicioService
) { 
  
}
saveCovid(): void {
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
