import { createAction, props } from '@ngrx/store';
import { StateInterface } from 'src/app/interface/state.interface';

//static
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
//
//for custom action
// export const customIncrement = createAction(
//   'customIncrement',
//   props<{ value: number }>()
// );
// or
export const customIncrement = createAction(
  'customIncrement',
  props<{ countValue: number }>() // props<{ count: number }>() keep in mind
);

//action for userName
export const userName = createAction('userName');
