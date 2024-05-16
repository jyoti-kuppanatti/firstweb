import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }


  retrieveAllTodos(username:string){
    //console.log("execute hello bean service");
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    
      }

      deleteTodo(username:string,id:number){
        return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
      }

      retrieveTodo(username:string, id:number){
        return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
          }

          updateTodo(username:string, id:number, todo:Todo){
           
            return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo,
            );
              }

              createTodo(username:string, todo:Todo){
                return this.http.post(`http://localhost:8080/users/${username}/todos`,todo);
                  }

               
}
