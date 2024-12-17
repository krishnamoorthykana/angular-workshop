import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <div>
    <h3>Test Component</h3>
    <p>testing inline template</p>
  </div>`,
styles:[`
 h3{color:blue}
 p{color:red}
`]
})
export class TestComponent {

}
