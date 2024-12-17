import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  template:`
  <div>
    <button (click)="logMessage('btn 3')">Click 3</button>
  </div>
  `
})
export class CompThreeComponent {
  logMessage(btn:any){
    console.log("Hi from :" +btn)
  console.log("Hello from :" +btn)
  console.log("Welcome from :" +btn)
  console.log("How are you from :" +btn)
  console.log("Angular from :" +btn)
  console.log("Bye from :" +btn)
  }
}
