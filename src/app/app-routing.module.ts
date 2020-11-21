import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: 'posts', component: PostListComponent },
  {path: 'main', component: MainPageComponent},
  {path: '', component: MainPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
