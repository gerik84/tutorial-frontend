import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';
import { PostModel } from '../models/post-model';
import {UserHttpService} from "./user.http.service";


@Injectable()
export class PostService {
  posts: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>(null);

  constructor(private http: UserHttpService) {
  }

  getPosts(preloaderType) {
    console.log('getPost');
    this.http.get('/posts?userId=2', null, preloaderType)
      .map(res => res.json())
      .subscribe(res => {
        let posts = [];
        res.forEach(post => {
          posts.push(new PostModel(post));
          console.log(posts);
        });

        this.posts.next(posts);
      });
  }
}
