import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {TodosStateModel} from "@todos/models/todos.models";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  state$: Observable<TodosStateModel>;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
    this.state$ = store.select('todos');
  }
}
