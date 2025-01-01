import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css',
})
export class UpdatePostComponent {
  id!:number;
  post = new Post();
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.postsService.getPostById(this.id).subscribe(data=>{
      this.post=data
      console.log("fetched post : ", this.post)
    })
  }
  onSubmit(){
    this.postsService.updatePost(this.id, this.post).subscribe(data=>{
      console.log("Updated Data: ",data)
      this.post = data
      console.log(this.post)
      this.router.navigate([''])
    })
  }
}
