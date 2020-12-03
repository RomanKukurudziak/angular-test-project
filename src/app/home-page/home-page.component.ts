import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Post} from '../shared/interfaces';
import {Photo} from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
