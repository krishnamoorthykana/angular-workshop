import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  template: `
  <div *ngIf = "true">This is visible</div>
  <div *ngIf = "flag">Test content</div>
  <button (click)="showHide()">Click me</button>
  <div *ngIf = "hide">Test Content 1</div><br><br>
  <button (click)="displayName()">Show / Hide Name</button>
  <h3 *ngIf = "showName; else elseBlock">Angular</h3>
  <ng-template #elseBlock>
    <h4>Name is Hidden</h4>
  </ng-template>
  <p>Alternate way</p>
  <div *ngIf="another; then thenBlock;else elseBlock1"></div>
  <ng-template #thenBlock>
  <h2>Angular</h2>
  </ng-template>
  <ng-template #elseBlock1>
  <h2>Hidden</h2>
  </ng-template>
  `
})
export class IfdirectiveComponent {
  flag=true
  hide = false
  showName = false
  another = false
  showHide(){
    this.hide = !this.hide
  }
  displayName(){
    this.showName = !this.showName
  }
}
