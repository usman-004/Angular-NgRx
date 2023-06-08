import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/authUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjs8cmpeYcLs83-J8qxwThpLrWtDtRfpg';
  constructor(private http: HttpClient) {}

  // login using http see it later on
  login(email: string, password: string) {
    // console.log(email, password);
    return this.http.post(this.baseUrl, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  formatUserData(data: any) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    console.log('User set on service', user);
    return user;
  }

  //
  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }
  // register method
  register(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjs8cmpeYcLs83-J8qxwThpLrWtDtRfpg',
      { email, password, returnSecureToken: true }
    );
  }
}
