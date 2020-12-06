import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import { Post } from '../shared/interfaces';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  constructor(public apiService: ApiService) {
  }

  public posts: Post[];
  page = 1;
  pageSize = 10;
  searchString = '';

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  search() {
    if (this.searchString.trim() !== '') {
      this.posts = this.posts.filter(posts => {
        return posts.body.toLocaleLowerCase().match(this.searchString.toLocaleLowerCase());
      });

      if (this.searchString.trim() === '') {
        this.ngOnInit();
      }
    }
  }
}
