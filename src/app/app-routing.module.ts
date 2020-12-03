import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent },
  {path: 'main', component: HomePageComponent},
  {path: '', component: HomePageComponent},
  {path: 'post/:id', component: PostPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
