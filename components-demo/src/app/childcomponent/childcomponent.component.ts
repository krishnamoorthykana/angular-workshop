import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  template:`
<div>
  <h3>Child component</h3>
  <p>Name received from parent : {{name}}</p>
  <!-- <p>Name received from parent : {{parentData}}</p> -->
</div>
  `
})
export class ChildcomponentComponent {
@Input('parentData') name = ''
// @Input() parentData = ''
}
