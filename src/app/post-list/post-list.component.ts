import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any;
  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/todos/1';

  ngOnInit(): void {
  }

  getPosts() {

  }
}
