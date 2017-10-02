import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post-service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html'

})

export class IndexComponent implements OnInit {

  public posts = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.posts.subscribe(data => {
      if (data) {
        this.posts = _.concat(this.posts, data);
      }
    });
  }

  getPosts(preloaderType) {
    this.postService.getPosts(preloaderType);
  }


}
