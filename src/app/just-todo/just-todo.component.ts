import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-just-todo',
  templateUrl: './just-todo.component.html',
  styleUrl: './just-todo.component.css'
})
export class JustTodoComponent implements OnInit{
  todo!: Todo; 
  id!: number;
constructor(private route:ActivatedRoute, private service:TodoDataService, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());
    if(this.id!=-1){
this.service.retrieveTodo('in28Minutes', this.id).subscribe(
  data => this.todo =data
)}
  }

  saveTodo(){
    if(this.id === -1){
      //create todo
      this.service.createTodo('in28Minutes',  this.todo)
      .subscribe(
        data=> console.log(data)
      )
this.router.navigate(['todos'])
    }else{
      this.service.updateTodo('in28Minutes', this.id, this.todo)
      .subscribe(
        data=> console.log(data)
      )
this.router.navigate(['todos'])
  }
}
}
