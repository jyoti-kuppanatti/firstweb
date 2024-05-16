import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomedataService } from './service/data/welcomedata.service';
import { ErrorComponent } from './error/error.component';
import { HTTP_INTERCEPTORS, HttpClient,HttpClientModule,HttpHandler  } from '@angular/common/http';
import "@angular/compiler";
import { TodosComponent } from './todos/todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { JustTodoComponent } from './just-todo/just-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    ErrorComponent,
          TodosComponent,
          MenuComponent,
          FooterComponent,
          JustTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule,HttpClient ,WelcomedataService,
    {provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorBasicAuthService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
