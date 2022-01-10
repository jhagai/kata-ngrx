import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterStateModel} from "../../../store/counter.models";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-counter-redux',
  templateUrl: './counter-redux.component.html',
  styleUrls: ['./counter-redux.component.scss']
})
export class CounterReduxComponent {

  counterState$: Observable<CounterStateModel>;

  constructor(private store: Store<{ counter: CounterStateModel }>) {
    // @TODO remplace line below by store selection.
    this.counterState$ = of({counter: 0});
  }

  decrement() {
    // @TODO remplace line below by dispatching the appropriate action to the store.
  }

  increment() {
    // @TODO remplace line below by dispatching the appropriate action to the store.
  }

}
