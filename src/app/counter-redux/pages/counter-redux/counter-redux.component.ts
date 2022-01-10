import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterStateModel} from "../../../store/counter.models";
import {Observable} from "rxjs";
import {decrementCounter, incrementCounter} from "../../store/counter.actions";

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
    this.store.dispatch(decrementCounter());
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

}
