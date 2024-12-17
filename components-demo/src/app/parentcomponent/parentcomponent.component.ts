import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  template:`
  <div>
    <h3>Parent component</h3>
    <app-childcomponent [parentData] = "name"></app-childcomponent>
  </div>
  `
})
export class ParentcomponentComponent {
name = "Angular User"
}
