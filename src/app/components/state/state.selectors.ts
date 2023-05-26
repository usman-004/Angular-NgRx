import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateInterface } from 'src/app/interface/state.interface';

const getInitialState = createFeatureSelector<StateInterface>('state'); //param 'state' should be same as used inside app.module.ts file.

export const counterSelector = createSelector(getInitialState, (state) => {
  return state.counter;
});

export const userNameSelector = createSelector(getInitialState, (state) => {
  return state.userName;
});
