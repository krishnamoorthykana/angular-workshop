import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  template:`
  <input [(ngModel)]='name'>
  {{name}}
  `
})
export class TwowaydatabindingComponent {
name:string=''
}
