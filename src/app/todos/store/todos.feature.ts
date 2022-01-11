import {todosReducer} from "./todos.reducer";
import {createFeature} from "@ngrx/store";

export const todosFeature = createFeature({
  name: 'todos',
  reducer: todosReducer,
});
