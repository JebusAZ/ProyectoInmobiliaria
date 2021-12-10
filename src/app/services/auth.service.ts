import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import  firebase  from "firebase/compat/app"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userloggedIn: boolean = false;
  constructor(private auth: AngularFireAuth, private router: Router) { 
    this.userloggedIn = false;

    this.auth.onAuthStateChanged((user: any) =>{
      if(user) {
        this.userloggedIn = true;
      } else{
        this.userloggedIn = false;
      }
    });
}

loginUser(): Promise<any> {
  return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((user: any) => {
    console.log('Auth Service: loginUser: success', user);
    return { isValid: true , message: user};
  }).catch((err) => {
    console.log('Auth Service: LoginUser: error', err)
    return { isValid: false , message: err.code ? err.message : err};
  });

}

getCurrentUser()
{
  return this.auth.currentUser;
}

logoutUser() : Promise<void> {
  return this.auth.signOut().then(() => {
    console.log('Auth Service: logoutUser: success');
    this.router.navigate(['/inmuebles'])
  }).catch((err:any) => {
    console.log('Auth Service: LogoutUser: error', err)
  });
}

}