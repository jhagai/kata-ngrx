import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayTodoComponent} from './components/display-todo/display-todo.component';
import {EditTodoComponent} from './components/edit-todo/edit-todo.component';
import {CreateTodoComponent} from './components/create-todo/create-todo.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {NgrxFormsModule} from "ngrx-forms";
import {StoreModule} from "@ngrx/store";
import {todosFeature} from "./store/todos.feature";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "./store/todos.effects";
import {FormsModule} from "@angular/forms";
import {TodosComponent} from './pages/todos/todos.component';
import {TodosRoutingModule} from "@todos/todos-routing.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DisplayTodoComponent,
    EditTodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    NgrxFormsModule,
    TodosRoutingModule,
    StoreModule.forFeature(todosFeature),
    EffectsModule.forFeature([TodosEffects]),
  ]
})
export class TodosModule {
}
