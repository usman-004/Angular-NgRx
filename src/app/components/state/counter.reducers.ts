import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.states';
import {
  customIncrement,
  decrement,
  increment,
  reset,
} from './counter.actions';

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
      counter: state.counter + action.counter,
    };
  })
);

export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action); //chunk of code
};
