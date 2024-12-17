import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  template:`
  <div>
    <button (click)="logMessage('btn 1')">Click 1</button><br>
  </div>
  `,
})
export class CompOneComponent {
logMessage(btn:any){
  console.log("Hi from :" +btn)
  console.log("Hello from :" +btn)
  console.log("Welcome from :" +btn)
  console.log("How are you from :" +btn)
  console.log("Angular from :" +btn)
  console.log("Bye from :" +btn)
}
}
