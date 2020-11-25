import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpclient: HttpClient) { }

  getPosts(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts?_limit=50');
  }

  getPhotos(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
  }

  get5Posts(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
  }

}


