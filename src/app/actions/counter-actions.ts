import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static INCREMENT_ASYNC = 'INCREMENT_ASYNC';
  static DECREMENT = 'DECREMENT';

  increment(): Action {
    return { type: CounterActions.INCREMENT };
  }

  decrement(): Action {
    return { type: CounterActions.DECREMENT };
  }

  incrementAsync(): Action {
    return { type: CounterActions.INCREMENT_ASYNC };
  }
}
