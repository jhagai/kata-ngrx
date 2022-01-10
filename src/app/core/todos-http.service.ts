import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoModel, TodoFormModel} from "@todos/store/todos.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosHttpService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('http://localhost:3000/todos');
  }

  update(todo: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(todo: TodoModel): Observable<unknown> {
    return this.http.delete(`http://localhost:3000/todos/${todo.id}`);
  }

  create(newTodo: TodoFormModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(`http://localhost:3000/todos`, newTodo);
  }

}
