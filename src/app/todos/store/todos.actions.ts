import {createAction, props} from "@ngrx/store";
import {TodoFormModel, TodoModel} from "../models/todos.models";

const todoProps = props<TodoModel>();

// Load all
export const loadAllTodosRequest = createAction('[Todo] Load all');
export const loadAllTodosSuccess = createAction('[Todo] Load all success', props<{ todos: TodoModel[] }>());
export const loadAllTodosFailure = createAction('[Todo] Load all failure');
// Creation
export const createTodoForm = createAction('[Todo] Create');
export const createTodoRequest = createAction('[Todo] Add request', props<TodoFormModel>());
export const createTodoSuccess = createAction('[Todo] Add success', todoProps);
export const createTodoFailure = createAction('[Todo] Add failure');
// Update
export const updateTodoForm = createAction('[Todo] update form');
export const updateTodoRequest = createAction('[Todo] Update request', props<TodoFormModel>());
export const updateTodoSuccess = createAction('[Todo] Update success', props<TodoModel>());
export const updateTodoFailure = createAction('[Todo] Update failure');
// @TODO create delete actions

export const selectTodo = createAction('[Todo] Select', todoProps);

