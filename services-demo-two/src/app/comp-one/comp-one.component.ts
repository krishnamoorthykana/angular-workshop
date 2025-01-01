import { Component } from '@angular/core';
import { Logging } from '../logging';
import { TestService } from '../test.service';

@Component({
  selector: 'app-comp-one',
  template: `
  <div>
  <button (click)="logMessage('btn 1')">Click 1</button><br>
</div>
`,
})
export class CompOneComponent {
  constructor(private test:TestService){}
  
  logMessage(btn:any){
  let log = new Logging();
  log.logMessage(btn);
  this.test.somefun();
  }
}
