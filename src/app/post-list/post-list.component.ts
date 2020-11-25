import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Photo } from './photo';
import { Post } from './post';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  constructor(public postService: PostService) {
  }

  post: Post[];
  photo: Photo[];

  ngOnInit(): void {

    // this.postService.getPosts().subscribe(data => {
    //   this.post = data
    // });
    this.postService.getPhotos().subscribe(data => {
      this.post = data;
    });
  }
}
