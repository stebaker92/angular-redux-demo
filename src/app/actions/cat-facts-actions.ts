import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CatFactsActions {
  static CAT_FETCH_REQUESTED = 'CAT_FETCH_REQUESTED';
  static CAT_FETCH_SUCCEEDED = 'CAT_FETCH_SUCCEEDED';
  static CAT_FETCH_FAILED = 'CAT_FETCH_FAILED';
}
