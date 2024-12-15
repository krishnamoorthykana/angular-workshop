import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from '../test-component/test-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
      AppRoutingModule
  ],
  bootstrap: [TestComponentComponent]
})
export class TestModuleModule { }
