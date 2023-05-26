import { createAction, props } from '@ngrx/store';
import { counterInterface } from 'src/app/interface/counter.interface';
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
  props<counterInterface>()
);

//action for userName
export const userName = createAction('userName');
