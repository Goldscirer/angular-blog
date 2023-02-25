import { Component } from '@angular/core';
import { ArticleService } from './services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles: any;
  constructor(private articlesService: ArticleService)
    {
      this.articlesService.getBlogPosts().subscribe( x => {
          console.log(x);
          this.articles = x.data;
          console.log(this.articles);
      })
    }
}
