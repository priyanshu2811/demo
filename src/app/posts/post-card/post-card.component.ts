import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})

export class PostCardComponent implements OnInit {

  @Input() id: any;
  @Input() fullPostsView?: boolean;
  mainContentView: any;

  constructor(
    public router: Router,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    console.log('id - ', this.id);
    console.log('fullPostsView - ', this.fullPostsView);
    // const content = this.contentfulService.logContent('5sv3GOL9Kle18xRNBINJDw');
    // console.log('contnent - ', content);
    const post = JSON.parse(JSON.stringify(this.contentfulService.postData(this.id)));
    this.mainContentView = (this.fullPostsView) ? post[0].mainContent : post[0].mainContent.slice(0,500) + '...';
  }

  gotoFullView(id: any) {
    if (!this.fullPostsView) {
      const url: string = "/posts/" + id
      this.router.navigateByUrl(url);
    }
  }
}
