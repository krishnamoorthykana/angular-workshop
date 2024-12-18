import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  newTask:string = ''
  tasks:string[] = []
  addNewTask(){
    console.log(this.newTask)
    this.tasks.push(this.newTask)
    this.newTask = ''
    console.log(this.tasks)
  }
  removeTask(i:number){
    this.tasks.splice(i, 1);
  }
}
