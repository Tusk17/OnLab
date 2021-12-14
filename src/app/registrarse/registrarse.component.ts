import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/models/bdol.model';
import { TutorialService } from 'src/services/bd.service';
import { AuthService } from 'src/services/auth.service';
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
  submitted = false;
  constructor(private tutorialService: TutorialService,private authService: AuthService) { }

  ngOnInit(): void {
  }
Login(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.login(email,password).then(res => {
    console.log('se logueo',res)
    })
}
Registrarse(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.registrer(email,password).then(res => {
    console.log('se registró',res)
  })
}
RegistrarseConGoogle(){
  console.log(this.usuario)
  const {email,password} = this.usuario;
  this.authService.RegistrarseWithGoogle(email,password).then(res => {
    console.log('se registró',res)
  })
}
obtenerUsuario(){
  this.authService.getUserLogged().subscribe(res=>{
    console.log(res?.email);
  });
}
logout(){
  this.authService.logout();
}
}
