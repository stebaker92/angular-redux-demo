import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { CounterActions } from '../actions/counter-actions';
import { IAppState } from '../app.module';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit, OnDestroy {

  subscription;
  count: number;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions,
  ) { }

  ngOnInit() {
    this.subscription = this.ngRedux
      .select<number>('count')
      .subscribe(newCount => (this.count = newCount));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

  incrementAsync() {
    this.ngRedux.dispatch(this.actions.incrementAsync());
  }
}
