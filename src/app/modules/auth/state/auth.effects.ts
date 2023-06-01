import { exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
} from './auth.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // login
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        console.log('action...', action);

        return this.authService
          .login(action.email, action.password)
          .then((data) => {
            console.log(data);
            return loginSuccess();
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
