import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {PhotoService} from '../photo.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(public postService: PostService, public photoService: PhotoService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe();
    this.photoService.getPhotos().subscribe();
  }

}
