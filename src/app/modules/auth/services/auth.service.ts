import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseUrl: string = environment['apiUrl'];
  // apiKey: string = environment['FIRBASE_API_KEY'];
  constructor(private http: HttpClient, private fireauth: AngularFireAuth) {
    // console.log(this.baseUrl);
  }

  // login using http see it later on
  // login(email: string, password: string) {
  //   // console.log(email, password);
  //   return this.http.post(this.baseUrl, {
  //     email,
  //     password,
  //     returnSecureToken: true,
  //   });
  // }

  // login method

  login(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password);
    //   .then(
    //   (res) => {
    //     localStorage.setItem('token', 'true');

    //     if (res.user?.emailVerified == true) {
    //       this.router.navigate(['dashboard']);
    //     } else {
    //       this.router.navigate(['/varify-email']);
    //     }
    //   },
    //   (err) => {
    //     alert(err.message);
    //     this.router.navigate(['/login']);
    //   }
    // );
  }

  // register method
  register(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password);
    //   .then(
    //   (res) => {
    //     alert('Registration Successful');
    //     this.sendEmailForVarification(res.user);
    //     this.router.navigate(['/login']);
    //   },
    //   (err) => {
    //     alert(err.message);
    //     this.router.navigate(['/register']);
    //   }
    // );
  }

  // sign out
  // logout() {
  //   this.fireauth.signOut().then(
  //     () => {
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/login']);
  //     },
  //     (err) => {
  //       alert(err.message);
  //     }
  //   );
  // }

  // forgot password
  // forgotPassword(email: string) {
  //   this.fireauth.sendPasswordResetEmail(email).then(
  //     () => {
  //       this.router.navigate(['/varify-email']);
  //     },
  //     (err) => {
  //       alert('Something went wrong');
  //     }
  //   );
  // }

  // email varification
  // sendEmailForVarification(user: any) {
  //   console.log(user);
  //   user.sendEmailVerification().then(
  //     (res: any) => {
  //       this.router.navigate(['/varify-email']);
  //     },
  //     (err: any) => {
  //       alert('Something went wrong. Not able to send mail to your email.');
  //     }
  //   );
  // }

  //sign in with google
  // googleSignIn() {
  //   return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
  //     (res) => {
  //       this.router.navigate(['/dashboard']);
  //       localStorage.setItem('token', JSON.stringify(res.user?.uid));
  //     },
  //     (err) => {
  //       alert(err.message);
  //     }
  //   );
  // }
}
