import { ContentfulService } from 'src/app/contentful.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent implements OnInit {
  
  id: any;
  fullPostsView: boolean;
  comments: any;

  constructor (
    public router: Router, 
    public contentfulService: ContentfulService
    ) {
    console.log('current route - ', this.router.url);
    const validatedURL = this.router.url.split('/')
    this.id = validatedURL[2];
    this.fullPostsView = true;
  }

  ngOnInit() {
    console.log('full post id - ', this.id);
    this.comments = JSON.parse(JSON.stringify(this.contentfulService.postData(this.id)))[0].comments;
  }
  
}
