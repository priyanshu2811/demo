import { Router } from '@angular/router';
import { ContentfulService } from 'src/app/contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.scss']
})
export class PostsHomeComponent implements OnInit {

  fullPosts: any;

  constructor(
    public contentfulService: ContentfulService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.fullPosts = JSON.parse(JSON.stringify(this.contentfulService.postData()));
  }

  gotoFullView(id: any) {
    if (id) {
      const url: string = "/posts/" + id
      this.router.navigateByUrl(url);
    }
  }
}
