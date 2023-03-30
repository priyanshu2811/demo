import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { FullPostComponent } from './full-post/full-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: FullPostComponent }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    FullPostComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PostsModule { }
