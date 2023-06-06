import { authReducer } from '../modules/auth/state/auth.reducers';
import { AUTH_STATE_NAME } from '../modules/auth/state/auth.selectors';
import { AuthState } from '../modules/auth/state/auth.state';
import { SharedInterface } from './interface/shared.interface';
import { SharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selectors';

export interface AppState {
  [SHARED_STATE_NAME]: SharedInterface;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: authReducer,
};
