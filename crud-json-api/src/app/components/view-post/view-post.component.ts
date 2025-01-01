import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  id!: number;
  post!: Post;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.postsService.getPostById(this.id).subscribe((data) => {
      this.post = data;
      console.log(this.post);
    });
  }
  goToList() {
    this.router.navigate(['']);
  }
}
