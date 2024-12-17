import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template:`
  <button (click)="sayHello()">Click to greet</button>
  <p>value of message : {{message}}</p>
  <input (input)="onChange($event)"/>
  <p>{{name}}
  `
})
export class EventComponent {
  message:string = ''
  name:string = ""
sayHello(){
  console.log("Greeting message after clicking button")
  this.message = 'button is clicked'
}
onChange(event:any){
  console.log("testing")
  console.log(event)
  console.log(event.target.value)
  this.name = event.target.value
}
}