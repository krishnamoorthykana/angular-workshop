import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';

const routes: Routes = [
  {path:'', component:PostsListComponent},
  {path:"posts/:id", component:ViewPostComponent},
  {path:'add-post', component:AddPostComponent},
  {path:'update-post/:id', component:UpdatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
