import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  template:`
  <div [ngSwitch] = "color">
    <div *ngSwitchCase="'red'">You picked up red color</div>
    <div *ngSwitchCase="'blue'">You picked up blue color</div>
    <div *ngSwitchCase="'green'">You picked up green color</div>
    <div *ngSwitchDefault>Pick correct color</div>
  </div>
  `
})
export class SwitchdirectiveComponent {
color = "jkhkjh"
}
