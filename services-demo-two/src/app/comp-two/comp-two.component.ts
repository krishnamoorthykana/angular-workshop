import { Component } from '@angular/core';
import { Logging } from '../logging';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-two',
  template:`
  <div>
  <button (click)="logMessage('btn 2')">Click 2</button><br>
</div>
  `
})
export class CompTwoComponent {
  constructor(private test:TestService){}
logMessage(btn:any){
  let log = new Logging();
  log.logMessage(btn);
  this.test.somefun()
  }
}
