import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  template:`
  <div>
    <button (click)="logMessage('btn 2')">Click 2</button>
  </div>
  `
})
export class CompTwoComponent {
  logMessage(btn:any){
  console.log("Hi from :" +btn)
  console.log("Hello from :" +btn)
  console.log("Welcome from :" +btn)
  console.log("How are you from :" +btn)
  console.log("Angular from :" +btn)
  console.log("Bye from :" +btn)
  }
}
