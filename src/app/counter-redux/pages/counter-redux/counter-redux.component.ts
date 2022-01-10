import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterStateModel} from "../../../store/counter.models";
import {Observable} from "rxjs";
import {COUNTER_DECREMENT_TYPE, COUNTER_INCREMENT_TYPE} from "../../store/counter.actions";

@Component({
  selector: 'app-counter-redux',
  templateUrl: './counter-redux.component.html',
  styleUrls: ['./counter-redux.component.scss']
})
export class CounterReduxComponent {

  counterState$: Observable<CounterStateModel>;

  constructor(private store: Store<{ counter: CounterStateModel }>) {
    this.counterState$ = store.select('counter');
  }

  decrement() {
    this.store.dispatch({type: COUNTER_DECREMENT_TYPE});
  }

  increment() {
    this.store.dispatch({type: COUNTER_INCREMENT_TYPE});
  }

}
