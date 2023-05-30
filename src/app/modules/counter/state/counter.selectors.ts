import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterInterface } from '../interface/counter.interface';
import { environment } from 'src/environments/environment';

const getInitialState = createFeatureSelector<CounterInterface>(
  environment.COUNTER_STATE_NAME
); //param 'state' should be same as used inside app.module.ts file.

export const counterSelector = createSelector(getInitialState, (state) => {
  return state.counter;
});

export const userNameSelector = createSelector(getInitialState, (state) => {
  return state.userName;
});
