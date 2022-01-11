import {Component, Input} from '@angular/core';
import {TodoFormModel, TodosStateModel} from "../../models/todos.models";
import {Store} from "@ngrx/store";
import {updateTodoRequest} from "../../store/todos.actions";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {

  @Input('state')
  state!: TodosStateModel;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
  }

  updateTodo(formValue: TodoFormModel) {
    this.store.dispatch(updateTodoRequest(formValue))
  }

}
