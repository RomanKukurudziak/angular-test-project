import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from './interfaces';
import {Photo} from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpclient: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts?_limit=50');
  }

  getPhotos(id: number): Observable<Photo> {
    return this.httpclient.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpclient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  get5Photos(): Observable<Photo> {
    return this.httpclient.get<Photo>('https://jsonplaceholder.typicode.com/posts?_limit=5');
  }

}
