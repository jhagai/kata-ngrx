import {Injectable} from "@angular/core";
import {TodosHttpService} from "../../core/todos-http.service";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {
  createTodoFailure,
  createTodoRequest,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  loadAllTodosFailure,
  loadAllTodosRequest,
  loadAllTodosSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess
} from "./todos.actions";
import {Store} from "@ngrx/store";
import {TodosStateModel} from "../models/todos.models";

@Injectable()
export class TodosEffects {

  loadTodos$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadAllTodosRequest.type),
        switchMap(() => this.todosService.getAll()
          .pipe(
            map(todos => loadAllTodosSuccess({todos})),
            catchError(() => of(loadAllTodosFailure()))
          )
        )
      ),
    {useEffectsErrorHandler: false}
  );

  addTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(createTodoRequest.type),
        exhaustMap(todoToCreate => this.todosService.create(todoToCreate)
          .pipe(
            map(createdTodo => createTodoSuccess(createdTodo)),
            catchError(() => of(createTodoFailure()))
          )
        )
      ),
    {useEffectsErrorHandler: false}
  );

  updateTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateTodoRequest),
        concatLatestFrom(() => this.store.select(s => s.todos.selected)),
        exhaustMap(([formValue, selected]) => this.todosService.update({...selected!, ...formValue})
          .pipe(
            map(updatedTodo => updateTodoSuccess(updatedTodo)),
            catchError(() => of(updateTodoFailure()))
          )
        )
      ),
    {useEffectsErrorHandler: false}
  );

  deleteTodo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deleteTodoRequest),
        concatLatestFrom(() => this.store.select(s => s.todos.selected)),
        exhaustMap(([_, selected]) => this.todosService.delete(selected!)
          .pipe(
            map(() => deleteTodoSuccess()),
            catchError(() => of(deleteTodoFailure()))
          )
        )
      ),
    {useEffectsErrorHandler: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ todos: TodosStateModel }>,
    private todosService: TodosHttpService
  ) {
  }
}
