import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostCommentEvent } from 'src/app/core/models/post-comment-event.model';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public getPots(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  public addPost(postCommented: PostCommentEvent) {
    console.log(postCommented);
  }
}
