import {Component, Input, OnInit} from '@angular/core';
import {createTodoForm, loadAllTodosRequest, selectTodo} from "../../store/todos.actions";
import {Store} from "@ngrx/store";
import {TodosStateModel} from "../../models/todos.models";
import {MatSelectionListChange} from "@angular/material/list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input('state')
  state!: TodosStateModel;

  constructor(private store: Store<{ todos: TodosStateModel }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllTodosRequest());
  }

  createTodo() {
    this.store.dispatch(createTodoForm());
  }

  selectTodo(event: MatSelectionListChange) {
    if (!this.state.deletionPending && !this.state.editing) {
      const selectedOption = event.options.find(opt => opt.selected);
      this.store.dispatch(selectTodo(selectedOption!.value));
    }
  }

}
