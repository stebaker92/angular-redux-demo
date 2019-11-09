import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppComponent } from './app.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { rootReducer } from '../reducers/rootReducer';
import { CounterActions } from 'src/app/actions/counter-actions';
import { CounterComponent } from './counter/counter.component';
import { rootSaga } from '../sagas/rootSaga';

export interface IAppState {
  count: number;
  fact: string;
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CatFactsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // mount it on the Store
    const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      ),
    );

    // then run the saga
    sagaMiddleware.run(rootSaga);
    ngRedux.provideStore(store);
  }
}
