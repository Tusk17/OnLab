import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import { ServicioService } from 'src/services/servicio.service';
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {
  servicio: Servicio = new Servicio();
  //@ViewChild('formulario')formulario!;
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,private servicioService: ServicioService
  ) { 
    
  }
  modificar(): void {
    this.servicioService.create(this.servicio).then(() => {
      console.log('Created new item successfully!');
    });
  
    Swal.fire(
      '¡Éxito!','Cancelaste tu cita','success'
    )
    }
  
   ngOnInit(): void {
   }
  
  }
  