import {createFeature} from "@ngrx/store";
import {counterReducer} from "./counter.reducers";

export const counterFeature = createFeature({
  name: 'counter',
  reducer: counterReducer,
});
