import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
 template:`
 <div>
  <h2>Welcome {{name}}</h2>
  <p>Expression evaluation : {{10+20}}</p>
  <p>String concatination : {{"HELLO " + name}}</p>
  <p>Java script properties : {{name.length}}</p>
  <p>Java script methods : {{name.toUpperCase()}}</p>
  <p>User defined function : {{sayHello()}}</p>
  <!-- can not do the following -->
  <!-- <p>{{num = 2}} -->
   <!-- <p>{{window.location.href}}</p>  -->
  <p>{{person.firstName}} {{person.lastName}}</p>
 </div>
 `
})
export class InterpolationComponent {
public name="Test User";
public person = {
  firstName:"Sample",
  lastName:"User"
}
sayHello(){
  return "Saying Hello to user :"+this.name;
}
}
