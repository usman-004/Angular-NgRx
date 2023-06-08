import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { loginSuccess, registerSuccess } from './auth.action';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);

    return {
      ...state,
      users: action.user,
    };
  }),
  on(registerSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export const authReducer = (state: any, action: any) => {
  //remove any later on (pending)
  return _authReducer(state, action);
};
