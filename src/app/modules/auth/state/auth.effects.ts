import { exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { loginStart, loginSuccess } from './auth.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  //efects using http
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            // this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUserData(data);
            console.log(user);

            return loginSuccess({ user });
          })
          // catchError((errResp) => {
          //   this.store.dispatch(setLoadingSpinner({ status: false }));
          //   const errorMessage = this.authService.getErrorMessage(
          //     errResp.error.error.message
          //   );
          //   return of(setErrorMessage({ message: errorMessage }));
          // })
        );
      })
    );
  });
}
