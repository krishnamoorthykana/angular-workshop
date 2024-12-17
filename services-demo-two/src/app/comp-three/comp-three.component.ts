import { Component } from '@angular/core';
import { Logging } from '../logging';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-three',
  template:`
  <div>
  <button (click)="logMessage('btn 3')">Click 3</button><br>
  </div>
  `
})
export class CompThreeComponent {
  constructor(private test:TestService){}
logMessage(btn:any){
  let log = new Logging();
  log.logMessage(btn);
  this.test.somefun();
  }
}
