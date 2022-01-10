import {Injectable} from '@angular/core';
import {map, merge, Observable, scan, shareReplay, startWith, Subject} from "rxjs";
import {CounterStateModel} from "../../store/counter.models";

@Injectable()
export class CounterService {

  private static readonly initialValue = 0;

  private readonly _counterState$: Observable<CounterStateModel>;
  private readonly _increment$ = new Subject<void>();
  private readonly _decrement$ = new Subject<void>();

  constructor() {

    this._counterState$ = merge(
      this._increment$.pipe(map(() => 1)),
      this._decrement$.pipe(map(() => -1))
    ).pipe(
      startWith(CounterService.initialValue),
      scan((acc, value) => {
          return acc + value;
        }, CounterService.initialValue
      ),
      map(v => ({counter: v})),
      shareReplay({refCount: false, bufferSize: 1})
    )
    ;
  }

  get counterState$(): Observable<CounterStateModel> {
    return this._counterState$;
  }

  increment() {
    this._increment$.next();
  }

  decrement() {
    this._decrement$.next();
  }
}
