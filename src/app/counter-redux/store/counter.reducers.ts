import {CounterStateModel} from "../../store/counter.models";
import {decrementCounter, incrementCounter} from "./counter.actions";
import {createReducer, on} from "@ngrx/store";

const initialState: CounterStateModel = {counter: 0};

export const counterReducer = createReducer(initialState,
  on(incrementCounter, state => ({...state, counter: state.counter + 1})),
  on(decrementCounter, state => ({...state, counter: state.counter - 1})),
);
