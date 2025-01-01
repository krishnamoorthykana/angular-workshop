import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { UpdatePostComponent } from './components/update-post/update-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    ViewPostComponent,
    AddPostComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
