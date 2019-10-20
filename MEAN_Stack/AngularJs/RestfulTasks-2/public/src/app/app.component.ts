import { Component,OnInit } from '@angular/core';
// import { HttpService } from './http.service';
import { TaskService } from './task.service';

import { Tasks } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Continued';
  tasks = [];
  constructor(private taskService: TaskService){};

  ngOnInit(){
    this.getTaskFormService()
  }

  getTaskFormService(){

    // let observable = this._httpService.getTasks()
    this.taskService.subscribe(data =>{
      console.log("Got our data",data)
      this.tasks = data['tasks'];
    })
  }

}
