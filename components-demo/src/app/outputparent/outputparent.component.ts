import { Component } from '@angular/core';

@Component({
  selector: 'app-outputparent',
  template: `<div>
    <h3>Parent Component</h3>
    <app-outputchild (messageEvent) = "receiveMessage($event)"></app-outputchild>
    <p>Message from child: {{ childMessage }}</p>
</div>`
})
export class OutputparentComponent {
  childMessage = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
