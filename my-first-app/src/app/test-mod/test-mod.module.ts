import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap:[TestCompComponent]
})
export class TestModModule { }
