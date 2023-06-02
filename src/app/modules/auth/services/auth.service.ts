import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/authUser.model';

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
  formatUserData() {
    // const expirationDate = new Date(
    //   new Date().getTime() + +data.expiresIn * 1000
    // );
    // const user = new User(
    //   data.email,
    //   data.idToken,
    //   data.localId,
    //   expirationDate
    // );
    // console.log('User set on service', user);

    //
    //hardcode object pass due to some issues regarding data fetching that come from firebase on login api
    const user = {
      localId: 'pa3HGfMfloNvh6rl1lXhdpyeubA2',
      email: 'test@test.com',
      idToken:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0NWUyNDZjNTEwNmExMGQ2MzFiMTA0M2E3MWJiNTllNWJhMGM5NGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmdyeC1lZmZlY3RzLWF1dGgiLCJhdWQiOiJuZ3J4LWVmZmVjdHMtYXV0aCIsImF1dGhfdGltZSI6MTY4NTY5MzA0MiwidXNlcl9pZCI6InBhM0hHZk1mbG9Odmg2cmwxbFhoZHB5ZXViQTIiLCJzdWIiOiJwYTNIR2ZNZmxvTnZoNnJsMWxYaGRweWV1YkEyIiwiaWF0IjoxNjg1NjkzMDQyLCJleHAiOjE2ODU2OTY2NDIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ekj6_RUWsWA3ghxODJ9x83y6oV2fRKRwiQyi6Fm81XtZ8197ko4_7usM3alp1s1KeGFYyqe7Fo7l2FRSPI3MsUMTH_STazQMKRIz3TQl4tU5-UfzL0IFqevX-j8PeUO1J6r2PCxmcSob_K7WPUZncnodPc2kD2BAfi83Pls0grAFYvjGsJcf24ZPU9tBT8MbV0OHPtMSUTPlM80w_05KrHsEXTGlpbh0Ixvtc9o6i2jRhmvE9spq6WwAsS2p0OP3JNS5uRD7dMb9frJ0xNxb5aTAnEoFlBqqwBdyhuFmxZxsA_8j58N-vhSiamaSFF_aorJem2oKXhIx3ZToRWb2sQ',
      registered: true,
      refreshToken:
        'APZUo0QPl7P8xCLLVQ8elwxF43GzOWphOoe2-UNiMcRft-vIQwojMxGm2-pcRCj1HtMOe2QZbBKUH0FWzrI81CtFrRSOq-2KHuWrcmB2qw1aCvu4Rd2khE2S4X4npLM0aYRiQ7aDrWXCtCyECf8XMhkc1gZ3Tu4oN7eZLgMI8uaYESblDvg4MasyOoOBI4V8H_R9w4TvUxOZ5eFjL2-xTWiKl1YokXmvGA',
      expiresIn: '3600',
    };
    return user;
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
