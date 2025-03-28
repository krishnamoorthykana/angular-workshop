import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputchild',
  template: `<div>
    <h3>Child Component</h3>
    <button (click)="sendMessage()">Send Message</button>
    </div>`
})
export class OutputchildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello Parent!');
  }
}
