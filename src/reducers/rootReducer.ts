import { Action, AnyAction } from 'redux';

import { IAppState } from 'src/app/app.module';
import { CounterActions } from 'src/app/actions/counter-actions';
import { CatFactsActions } from 'src/app/actions/cat-facts-actions';

export function rootReducer(lastState: IAppState = { count: 0, fact: '' }, action: AnyAction): IAppState {
  console.log("received event", action.type);

  switch (action.type) {
    case CounterActions.INCREMENT:
      return { ...lastState, count: lastState.count + 1 };
    case CounterActions.DECREMENT:
      return { ...lastState, count: lastState.count - 1 };
    case CatFactsActions.CAT_FETCH_SUCCEEDED:
      return { ...lastState, fact: action.data };
    case CatFactsActions.CAT_FETCH_FAILED:
      return { ...lastState, fact: 'Unable to fetch fact: ' + action.data };
  }

  // We don't care about any other actions right now.
  return lastState;
}
