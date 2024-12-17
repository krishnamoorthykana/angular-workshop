import { Component } from '@angular/core';

@Component({
  selector: 'app-differenceeventandtwoway',
  template:`
  User name : <input (input)="onUpdate($event)">
  <p>{{userName}}</p>
  Admin name : <input [(ngModel)]="adminName">
  <p>{{adminName}}
  
  `
})
export class DifferenceeventandtwowayComponent {
userName = "Test User"
adminName = "Admin"
onUpdate(event:any){
  this.userName = event.target.value
}
}
 // also change adminName to UserName and c the changes