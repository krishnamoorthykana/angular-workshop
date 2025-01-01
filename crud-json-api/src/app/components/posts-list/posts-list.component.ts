import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  posts:Post[]=[];
  constructor(private postsService:PostsService, private router:Router){}
  ngOnInit(): void {
    this.getPostsList();
  }

  private getPostsList(){
    this.postsService.getEmployeeList().subscribe(data=>{
      this.posts=data;
      console.log(this.posts);
    });
  }

  updatePost(id:number){
    this.router.navigate(['update-post', id])
  }
  viewPost(id:number){
  this.router.navigate(['posts',id])
  }
  deletePost(id:number){
    console.log(id)
    this.postsService.deletePost(id).subscribe(data=>{
      console.log("deleted Post: " ,data)
      this.getPostsList();
    })
  }
}
