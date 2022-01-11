import {Component, Input} from '@angular/core';
import {TodoFormModel, TodosStateModel} from "@todos/models/todos.models";
import {Store} from "@ngrx/store";
import {createTodoRequest} from "@todos/store/todos.actions";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  @Input('state')
  state!: TodosStateModel;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
  }

  addTodo(todo: TodoFormModel): void {
    this.store.dispatch(createTodoRequest(todo));
  }
}
