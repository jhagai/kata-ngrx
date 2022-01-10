import {Component} from '@angular/core';
import {TodoModel, TodosStateModel, TodoFormModel} from "@todos/store/todos.models";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {createTodoRequest, createTodoForm, updateTodoForm, selectTodo, updateTodoRequest} from "@todos/store/todos.actions";
import {MatSelectionListChange} from "@angular/material/list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata-ngrx';

  state$: Observable<TodosStateModel>;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
    this.state$ = store.select('todos');
  }

  selectTodo(event: MatSelectionListChange) {
    const selectedOption = event.options.find(opt => opt.selected);
    this.store.dispatch(selectTodo(selectedOption!.value));
  }

  editTodo() {
    this.store.dispatch(updateTodoForm());
  }

  updateTodo(todoToUpdate: TodoModel, formValue: TodoFormModel) {
    this.store.dispatch(updateTodoRequest({...todoToUpdate, ...formValue}));
  }

  createTodo() {
    this.store.dispatch(createTodoForm());
  }

  addTodo(todo: TodoFormModel) {
    this.store.dispatch(createTodoRequest(todo));
  }
}
