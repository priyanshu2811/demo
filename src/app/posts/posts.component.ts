import { ContentfulService } from 'src/app/contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  fullData: any;

  constructor(
    public contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    this.fullData = this.contentfulService.postData();    
  }

}
