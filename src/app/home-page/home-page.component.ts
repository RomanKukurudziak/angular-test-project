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

  constructor(public apiService: ApiService) {}
  posts: Post;
  photos: Photo;

  ngOnInit(): void {
    const id: number = (Math.ceil(Math.random()*50));
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
    this.apiService.getPhotos(id).subscribe(photos => {
      this.photos = photos;

    })
  }
}
