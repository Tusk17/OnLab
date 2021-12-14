import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

 //@ViewChild('formulario')formulario!;
 form!:FormGroup;
 constructor(
   private formBuilder:FormBuilder
 ) { 
   this.formulario();
 }

 formulario(){
  this.form=this.formBuilder.group({
    
  });
  }
  ngOnInit(): void {
  }
  iniciar() {
    console.log(this.form.value);
    this.form.reset();
    Swal.fire(
      '¡Exitoso!','En un momento mandamos sus resultados por correo','success'
    )
    }
}