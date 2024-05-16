import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class helloWB{
  constructor(@Inject(String)  public message:string){}
}
@Injectable()
export class WelcomedataService {

  constructor(private http:HttpClient) { }

  navigatetoHelloworldbean(){
console.log("execute hello bean service");
return this.http.get<helloWB>('http://localhost:8080/hello-world-bean');

  }

  navigatetoHelloworldbeanwithPathVariable(name:string){

   console.log("messsage")
    return this.http.get<helloWB>(`http://localhost:8080/hello-world/path-variable/${name}`,
     
    );
    
      }


     
}
