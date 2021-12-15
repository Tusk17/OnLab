import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/models/bdol.model';
import { TutorialService } from 'src/services/bd.service';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  tutorial: Tutorial = new Tutorial();
  usuario={
    nombreC:'',
    email: '',
    password: '',
    passwordC:''
  }
  newUser:boolean = false;
  submitted = false;
  constructor(private tutorialService: TutorialService,private authService: AuthService,
    private afuauth: AngularFireAuth) { 
      this.afuauth.onAuthStateChanged((user) => {
        if (user){
          this.newUser=true;
        }else {}
      })
    }

  ngOnInit(): void {
  }
Login(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.login(email,password).then(res => {
    console.log('se logueo',res)
    if(this.newUser==true){
      Swal.fire(
        '¡Inicio de sesión exitoso!','Puede acceder a los servicios ahora','success'
      )
    }
    })
    this.newUser = false;
}
Registrarse(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.registrer(email,password).then(res => {
    console.log('se registró',res)
    if(this.newUser==true){
      Swal.fire(
        '¡Registro exitoso!','Puede acceder a los servicios ahora','success'
      )
    }
  })
  
  this.newUser = false;
}
RegistrarseConGoogle(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.RegistrarseWithGoogle(email,password).then(res => {
    console.log('se registró',res)
    if(this.newUser==true){
      Swal.fire(
        '¡Inicio de sesión exitoso!','Puede acceder a los servicios ahora','success'
      )
    }
  })
  this.newUser = false;
}
obtenerUsuario(){
  this.authService.getUserLogged().subscribe(res=>{
    console.log(res?.email);
  });
}
logout(){
  this.authService.logout();
  Swal.fire(
    'Sesión cerrada','Que tenga un buen dia','success'
  )
}
}
