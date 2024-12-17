import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
  <h3>property works!</h3>
  <button disabled="true">Click me1</button><br><br>
  <button [disabled]="isDisabled">Click me2</button>
  `
})
export class PropertyComponent {
isDisabled=false
constructor(){
 setTimeout(()=>{
    this.isDisabled = true
  },3000);
}
}
