import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
post = new Post()
constructor(private postsService:PostsService, private router:Router){}
onSubmit(){
  console.log(this.post)
  this.addPost();
}
  private addPost() {
   this.postsService.addPost(this.post).subscribe(data=>{
    console.log(data)
    this.router.navigate([''])
   })
  }
}
