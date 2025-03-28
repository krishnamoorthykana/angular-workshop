import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
  <h3>property works!</h3>
  <button disabled="false">Click me1</button><br><br>
  <button [disabled]="isDisabled">Click me2</button><br><br>
  <img [src]="imagePath" width="300" />
  `
})
export class PropertyComponent {
isDisabled=false
imagePath = "../../assets/car.jpg"
constructor(){
 setTimeout(()=>{
    this.isDisabled = true
  },3000);
}
}
