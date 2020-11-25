import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post-list/post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public postService: PostService) {}

  posts: Post[];

  ngOnInit(): void {
    this.postService.get5Posts().subscribe(data => {
      this.posts = data;
    });
  }
}
