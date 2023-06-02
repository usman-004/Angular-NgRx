import { exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from './auth.action';
import { from } from 'rxjs';
import { User } from '../models/authUser.model';
// import { AuthResponseData } from '../models/authResponseData.model';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // login
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      switchMap((action) => {
        console.log('action...', action);

        return this.authService
          .login(action.email, action.password)
          .then((data: any) => {
            debugger;
            //remove any and solve it (pending)
            console.log('response data ...', data);
            const user = this.authService.formatUserData();
            return loginSuccess({ user });
          });
      })
    );
  });
  //
  //register
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerStart),
      exhaustMap((action) => {
        console.log('action...', action);

        return this.authService
          .register(action.email, action.password)
          .then((data) => {
            console.log(data);
            return registerSuccess();
          });
      })
    );
  });
}
