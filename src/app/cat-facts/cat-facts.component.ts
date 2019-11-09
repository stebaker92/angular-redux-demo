import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { select } from '@angular-redux/store';

import { IAppState } from '../app.module';
import { CatFactsActions } from '../actions/cat-facts-actions';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html'
})
export class CatFactsComponent implements OnInit {

  @select(x => x.fact) fact$;

  constructor(
    private ngRedux: NgRedux<IAppState>,
  ) { }

  ngOnInit() {
  }

  getFact() {
    this.ngRedux.dispatch({ type: CatFactsActions.CAT_FETCH_REQUESTED });
  }
}
