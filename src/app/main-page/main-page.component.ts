import { Component} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor() {}
}
// import { Component} from '@angular/core';
// import {PostService} from '../post.service';
//
// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.scss']
// })
// export class MainPageComponent {
//
//   data:Array<any>;
//
//   constructor(private Posts: PostService) {
//     this.data = new Array<any>();
//   }
//
//   getImageFromAPI() {
//     this.Posts.getPosts().subscribe((data) => {
//       this.data = data;
//     });
//   }
// }
