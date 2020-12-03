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

  public post: Post[];
  page = 1;
  pageSize = 10;
  searchString = '';

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.post = posts;
    });

  }

  search() {
    // if (this.searchString.trim() !== '') {
      this.post = this.post.filter(post => {
        return post.body.toLocaleLowerCase().match(this.searchString.toLocaleLowerCase());
      });

      if (this.searchString.trim() === '') {
      this.ngOnInit();
      }
    }
  }

