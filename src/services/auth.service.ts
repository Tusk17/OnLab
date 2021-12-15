import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afuauth: AngularFireAuth) { }

  
  async login (email: string, password: string){
    try {
      return await this.afuauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error en login",error);
      return null;
    }
  }

  async RegistrarseWithGoogle (email: string, password: string){
    try {
      return await this.afuauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("error en login con google",error);
      return null;
    }
  }

  async registrer (email: string, password: string){
    try {
      return await this.afuauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error en login",error);
      return null;
    }
  }
  getUserLogged(){
    return this.afuauth.authState;
  }
  logout(){
    this.afuauth.signOut();
  }
}
