import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import  {ServicioService } from 'src/services/servicio.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-bdatos',
  templateUrl: './bdatos.component.html',
  styleUrls: ['./bdatos.component.css']
})
export class BdatosComponent implements OnInit {
  public email:string ='';
  tutorials?: Servicio[];
  currentTutorial?: Servicio;
  currentIndex = -1;
  title = '';
//@ViewChild('formulario')formulario!;
form!:FormGroup;
constructor(
  private formBuilder:FormBuilder,private servicioService: ServicioService
) { 
  
}
modificar(): void {
  this.servicioService.getAll(this.email).snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ email: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.tutorials = data;
  });
  Swal.fire(
    '¡Éxito!','Modificaste tu cita','success'
  )
  }

 ngOnInit(): void {
 }

}
