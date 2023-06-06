import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedInterface } from '../interface/shared.interface';

export const SHARED_STATE_NAME = 'shared';

const getSharedState =
  createFeatureSelector<SharedInterface>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});
