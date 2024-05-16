import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';

export class Todo{
  constructor(
public id:number,
public description:string,
public done:boolean,
public targetDate:Date
  ){}
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos: Todo[] | undefined;
  //   // {id : 1, description : 'Learn to dance'},
  //   // {id :2, description : 'Learne to dance'},
  //   // {id : 3, description : 'Learn eto dance'}
  //   new Todo(1,'Learn to dance',false, new Date ),
  //   new Todo(2,'Learn sfddsfto dance',false, new Date ),
  //   new Todo(3,'Leardfdn to dance',false, new Date ),
  // ]
  message!: string;
  constructor(private todoService:TodoDataService, private router:Router){}

  ngOnInit(): void {
    this.refreshTodos();
    // this.todoService.retrieveAllTodos('in28Minutes').subscribe(
    //   response => {
    //     this.todos=response;
    //   }
    // )
  }

  
  deleteTodo(id:number){
    this.todoService.deleteTodo('in28Minutes',id).subscribe(
      response =>{console.log(response)
        this.message =`Delete of todo of id ${id} successfull`
        this.refreshTodos()
      } 
    )
  }

  updateTodo(id:number){
  this.router.navigate(['justTodo',id]);
  }


  refreshTodos(){
    this.todoService.retrieveAllTodos('in28Minutes').subscribe(
      response => {
        this.todos=response;
       
      }
    )
  }

  addTodo(){
    this.router.navigate(['justTodo',-1]);
    }
  
}
