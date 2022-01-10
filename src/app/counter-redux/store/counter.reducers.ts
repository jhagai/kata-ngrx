import {CounterStateModel} from "../../store/counter.models";
import {Action} from "@ngrx/store/src/models";

const initialState: CounterStateModel = {counter: 0};

export function counterReducer(state: CounterStateModel = initialState, action: Action) {
  // @TODO Implement reducer.
  return state
}
