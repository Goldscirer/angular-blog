import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/articles.model';

@Injectable()
export class ArticleService {
  blogPostsURL = 'http://localhost:1337/api/articles';

  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get<any>(`${this.blogPostsURL}?populate=*`);
  }

  getBlogPost(id: number) {
    return this.http.get<Post>(`${this.blogPostsURL}/${id}?populate=*`);
  }
}