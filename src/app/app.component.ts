import { ContentfulService } from './contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lok-jigyasa-cms';

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.logContent('5sv3GOL9Kle18xRNBINJDw');
  }
}
