import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Photo } from './photo';
import { Post } from './post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  constructor(public apiService: ApiService) {
  }

  public post: Post[];
  public photo: Photo[];
  page = 1;
  pageSize = 10;
  searchString = '';

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.post = posts;
    });
    this.apiService.getPhotos().subscribe(photos => {
      this.photo = photos;
    });
  }

  search() {
    if (this.searchString.trim() !== '') {
      this.post = this.post.filter(res => {
        return res.body.toLocaleLowerCase().match(this.searchString.toLocaleLowerCase());
      });

    } else if (this.searchString.trim() === '') {
      this.ngOnInit();
      }
    }
  }

