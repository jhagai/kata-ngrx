import {Component} from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {Observable} from "rxjs";
import {CounterStateModel} from "../../../store/counter.models";

@Component({
  selector: 'app-counter-state-in-service',
  templateUrl: './counter-state-in-service.component.html',
  styleUrls: ['./counter-state-in-service.component.scss']
})
export class CounterStateInServiceComponent {

  readonly counterState$: Observable<CounterStateModel>;

  constructor(private counterService: CounterService) {
    this.counterState$ = this.counterService.counterState$;
  }

  decrement() {
    this.counterService.decrement();
  }

  increment() {
    this.counterService.increment();
  }
}
