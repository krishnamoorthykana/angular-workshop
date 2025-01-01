import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';
//import { HomeComponent } from './home/home.component';
// import { DepartmentsComponent } from './departments/departments.component';
// import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
 //   HomeComponent,
 //   DepartmentsComponent,
 //   StudentsComponent
      routingComponents,
      // PageNotFoundComponent,
      // DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
