import { Component, OnInit } from '@angular/core';
import { WelcomedataService, helloWB } from '../service/data/welcomedata.service';
import { ActivatedRoute,RouterLink  } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  standalone: true,
  imports: [RouterLink,NgIf]
})
export class WelcomeComponent implements OnInit {
  messagefromservice!: string;
  name='';
  
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }


  constructor(   private route: ActivatedRoute,private service: WelcomedataService ){
    
  }

  connectToService(){
    console.log("name" + this.name);
    this.service.navigatetoHelloworldbeanwithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response)
    );

  
  }

  handleSuccessfullResponse(response: helloWB) {
    console.log(response.message);
    this.messagefromservice = response.message;
  }
  
 

  
}

