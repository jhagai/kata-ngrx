import {FormGroupState} from "ngrx-forms";

export interface TodoModel {
  id: number;
  title: string;
  details: string;
}

export type TodoFormModel = Omit<TodoModel, 'id'>;

export interface TodosStateModel {
  todos: TodoModel[];
  loadError: boolean;
  loadTodosPending: boolean;

  selected: TodoModel | null;

  creating: boolean;
  creationPending: boolean;
  creationForm: FormGroupState<TodoFormModel>;

  editing: boolean;
  updatePending: boolean;
  editionForm: FormGroupState<TodoFormModel>;

  deletionPending: boolean;
}
