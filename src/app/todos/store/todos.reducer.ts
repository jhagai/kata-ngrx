import {createReducer, on} from "@ngrx/store";
import {
  createTodoFailure,
  createTodoForm,
  createTodoRequest,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  loadAllTodosFailure,
  loadAllTodosRequest,
  loadAllTodosSuccess,
  selectTodo,
  updateTodoFailure,
  updateTodoForm,
  updateTodoRequest,
  updateTodoSuccess
} from "./todos.actions";
import {TodoFormModel, TodosStateModel} from "../models/todos.models";
import {
  createFormGroupState,
  onNgrxForms,
  reset,
  setValue,
  updateGroup,
  validate,
  wrapReducerWithFormStateUpdate
} from "ngrx-forms";
import {required} from "ngrx-forms/validation";

const initialEditionFormState = createFormGroupState<TodoFormModel>('updateTodoForm', {
  title: '',
  details: ''
});

const validateFormState = updateGroup<TodoFormModel>({
  title: validate(required)
});

const initialCreationFormState = createFormGroupState<TodoFormModel>('createTodoForm', {
  title: '',
  details: ''
});

const initialState: TodosStateModel = {
  todos: [],
  loadError: false,
  loadTodosPending: false,

  selected: null,

  creating: false,
  creationPending: false,
  creationForm: initialCreationFormState,

  editing: false,
  updatePending: false,
  editionForm: initialEditionFormState,

  deletionPending: false
};

const rawTodosReducer = createReducer(
    initialState,
    onNgrxForms(),
    on(createTodoForm, (state) => {
      return {...state, creationForm: initialCreationFormState, creating: true};
    }),
    on(createTodoRequest, state => {
        return {...state, creationPending: true};
      }
    ),
    on(createTodoSuccess, (state, createdTodo) => {
        const todos = [...state.todos, createdTodo];
        return {...state, todos, creating: false, creationPending: false};
      }
    ),
    on(createTodoFailure, state => {
        return {...state, creationPending: false};
      }
    ),
    on(deleteTodoRequest, state => {
      return {...state, deletionPending: true};
    }),
    on(deleteTodoSuccess, state => {
      const updatedTodoList = state.todos.filter(todo => todo.id !== state.selected!.id);
      return {...state, todos: updatedTodoList, selected: null, editing: false, deletionPending: false};
    }),
    on(deleteTodoFailure, state => {
      return {...state, deletionPending: false};
    }),
    on(updateTodoForm, (state) => {
      const {id, ...formValueFromTodo} = state.selected!;
      const updatedGroup = setValue(formValueFromTodo)(reset(state.editionForm));
      return {...state, editing: true, editionForm: updatedGroup};
    }),
    on(updateTodoRequest, state => {
      return {...state, updatePending: true};
    }),
    on(updateTodoSuccess, (state, updatedTodo) => {
      const updatedTodoList = state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
      return {...state, todos: updatedTodoList, selected: updatedTodo, editing: false, updatePending: false};
    }),
    on(updateTodoFailure, state => {
      return {...state, updatePending: false};
    }),
    on(selectTodo, (state, selectedTodo) => {
      return {...state, selected: selectedTodo};
    }),
    on(loadAllTodosRequest, state => ({
      ...state, isLoadingTodos: true, loadError: false
    })),
    on(loadAllTodosSuccess, (state, {todos}) => {
      return {...state, todos, isLoadingTodos: false, loadError: false};
    }),
    on(loadAllTodosFailure, state => {
      return {...state, todos: [], isLoadingTodos: false, loadError: true};
    })
  )
;

const withUpdateValidations = wrapReducerWithFormStateUpdate(
  rawTodosReducer,
  s => s.editionForm,
  validateFormState,
);

const withCreateValidations = wrapReducerWithFormStateUpdate(
  withUpdateValidations,
  s => s.creationForm,
  validateFormState,
);

export const todosReducer = withCreateValidations;
