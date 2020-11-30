import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Post} from '../post-list/post';
import {Photo} from '../post-list/photo';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public postService: ApiService) {}
  a: number = Math.ceil((Math.random() * 1000));
  b: number = Math.ceil((Math.random() * 1000));
  c: number = Math.ceil((Math.random() * 1000));
  images = [this.a, this.b, this.c].map((n) => `https://picsum.photos/id/${n}/900/500`);
  posts: Post[];
  photos: Photo[];

  ngOnInit(): void {
    this.postService.get5Posts().subscribe(data => {
      this.posts = data;
    });
    this.postService.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }
}
