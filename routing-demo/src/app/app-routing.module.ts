import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'students', component: StudentsComponent },
  // passing parameter to route
  { path: 'departments/:id', component: DepartmentDetailComponent },
  // wild card route for path which doesnt exist example: http://localhost:4200/contact
  // we need to display a page not found
  // create a component called pageNotFound and configure below route
  // this should be the last route
  // {path:"page-not-found", component:PageNotFoundComponent},
  // {path:"**", redirectTo:'page-not-found'},
  // or
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  DepartmentsComponent,
  StudentsComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
