import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Photo, Post} from '../shared/interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post: Post;
  photo: Photo;
  constructor( private apiService: ApiService,
               private route: ActivatedRoute) { }



  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPostById(id).subscribe(post => this.post = post);
    this.apiService.getPhotos(id).subscribe(photo => this.photo = photo);

  }

}
