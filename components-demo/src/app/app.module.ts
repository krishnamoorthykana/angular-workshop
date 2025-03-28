import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { DifferenceeventandtwowayComponent } from './differenceeventandtwoway/differenceeventandtwoway.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { OutputchildComponent } from './outputchild/outputchild.component';
import { OutputparentComponent } from './outputparent/outputparent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwowaydatabindingComponent,
    DifferenceeventandtwowayComponent,
    IfdirectiveComponent,
    SwitchdirectiveComponent,
    FordirectiveComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    OutputchildComponent,
    OutputparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
