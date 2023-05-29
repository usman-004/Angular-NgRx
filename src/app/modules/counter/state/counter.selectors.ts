import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterInterface } from '../interface/counter.interface';

const getInitialState = createFeatureSelector<CounterInterface>('counter'); //param 'state' should be same as used inside app.module.ts file.

export const counterSelector = createSelector(getInitialState, (state) => {
  return state.counter;
});

export const userNameSelector = createSelector(getInitialState, (state) => {
  return state.userName;
});
