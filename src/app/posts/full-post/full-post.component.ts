import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent implements OnInit {
  
  id: any;

  constructor ( public router: Router) {
    console.log('current route - ', this.router.url);
    const validatedURL = this.router.url.split('/')
    this.id = validatedURL[2];
  }

  ngOnInit() {
    console.log('full post id - ', this.id);
  }
  
}
