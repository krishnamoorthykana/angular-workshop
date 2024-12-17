import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  template:`
  <div *ngFor="let car of cars">
    <h3>{{car}}</h3>
  </div>
  `
})
export class FordirectiveComponent {
cars = ["BMW", "Audi","Mercedes","Rolls Royce"]
}
