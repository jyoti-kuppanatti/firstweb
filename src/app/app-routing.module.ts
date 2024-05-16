import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { JustTodoComponent } from './just-todo/just-todo.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'error',component:ErrorComponent},
  {path:'justTodo/:id',component:JustTodoComponent, canActivate:[RouteGuardService]},
  {path:'',component:LoginComponent},
  {path:'todos',component:TodosComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
