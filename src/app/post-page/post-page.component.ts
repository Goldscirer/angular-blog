import { Component } from '@angular/core';
import { ArticleService } from '../articles/services/articles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../articles/model/articles.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent {
  private postId: number | undefined;
  public post: Post | undefined;
  public imageURL: string = '';

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
      if (this.postId) {
        this.fetchPostData(this.postId);
      }
    });
  }

  fetchPostData(postId: number) {
    this.articlesService.getBlogPost(postId).subscribe((post: Post) => {
      console.log(post.data.attributes.image);
      this.post = post;
      this.imageURL = 'http://localhost:1337' + post.data.attributes.image.data[0].attributes.url;

    });
  }
}
