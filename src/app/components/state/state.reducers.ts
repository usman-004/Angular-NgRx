import { createReducer, on } from '@ngrx/store';
import { initialState } from './state.states';
import {
  customIncrement,
  decrement,
  increment,
  reset,
  userName,
} from './state.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    // console.log('action... ', action);
    return {
      ...state,
      // counter: state.counter + action.value,
      counter: state.counter + action.countValue,
    };
  }),
  on(userName, (state) => {
    return {
      ...state,
      userName: 'M Usman',
    };
  })
);

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action); //chunk of code
};
