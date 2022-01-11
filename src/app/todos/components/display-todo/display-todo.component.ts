import {Component, Input} from '@angular/core';
import {TodosStateModel} from "../../models/todos.models";
import {Store} from "@ngrx/store";
import {deleteTodoRequest, updateTodoForm} from "../../store/todos.actions";

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.scss']
})
export class DisplayTodoComponent {

  @Input('state')
  state!: TodosStateModel;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
  }

  editTodo() {
    this.store.dispatch(updateTodoForm());
  }

  deleteTodo() {
    this.store.dispatch(deleteTodoRequest());
  }
}
