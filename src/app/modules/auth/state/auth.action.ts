import { createAction, props } from '@ngrx/store';
import { User } from '../models/authUser.model';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';
export const LOGIN_FAIL = '[auth page] login Fail';

export const REGISTER_START = '[auth page] register start';
export const REGISTER_SUCCESS = '[auth page] register Success';
export const REGISTER_FAIL = '[auth page] register Fail';

//login
export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: any }>());

//register
export const registerStart = createAction(
  REGISTER_START,
  props<{ email: string; password: string }>()
);
export const registerSuccess = createAction(REGISTER_SUCCESS);
