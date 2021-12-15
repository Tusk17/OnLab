import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged=this.authService.getUserLogged();
  userlog:boolean=false;
  constructor(private authService: AuthService,private afuauth: AngularFireAuth) { 
    this.afuauth.onAuthStateChanged((user) => {
      if (user){
        this.userlog=true;
      }else {}
    }) 
  }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.userlog=false;
  }
}
