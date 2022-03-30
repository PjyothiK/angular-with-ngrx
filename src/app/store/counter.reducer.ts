import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialState } from './couter.state';

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
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      counter: 0,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
