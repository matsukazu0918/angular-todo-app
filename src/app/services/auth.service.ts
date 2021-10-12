import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = this.afAuth.user;
  constructor(private afAuth: AngularFireAuth) {}
  login() {
    this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      });
  }
  logout() {
    this.afAuth.signOut();
  }
}