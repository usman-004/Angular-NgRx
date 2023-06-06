import { createReducer, on } from '@ngrx/store';

import { setErrorMessage, setLoadingSpinner } from './shared.action';
import { initialSharedState } from './shared.states';

const _sharedReducer = createReducer(
  initialSharedState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
