import {CounterStateModel} from "../../store/counter.models";
import {Action} from "@ngrx/store/src/models";
import {COUNTER_DECREMENT_TYPE, COUNTER_INCREMENT_TYPE} from "./counter.actions";

const initialState: CounterStateModel = {counter: 0};

export function counterReducer(state: CounterStateModel = initialState, action: Action) {
  switch (action.type) {
    case COUNTER_INCREMENT_TYPE:
      return {...state, counter: state.counter + 1}
      break;
    case COUNTER_DECREMENT_TYPE:
      return {...state, counter: state.counter - 1}
      break;
    default:
      return state;
  }
}
