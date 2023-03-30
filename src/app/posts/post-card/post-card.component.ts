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
  mainContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quisquam reprehenderit id istekld dslkd werllfkijwof wlekfjwef fjwpoef fwfjwpfw wofjwfmw we;ffkw;fw,  fwpfwefkkpwokf woefkjpwkfwe fwllf;w;lelmfwle flwekfwe fwekmfmweefmlwkeefmwemf wefmwelkfwelkfnwelk flwkkkeenfwle fwefwejjfwejfwe eflkwenflwkenfwe fklwenmeflkwnef welfknwlkefnwe fwlekefnlwek fwlekfnwek fwmefwelkfwelkfwe  fweekfmmwlkefnnwelef wellekfnlwef wefknmwlefnlwkenfwe lkwenflkwenfwe fwekfnwlekfnwlknfwe  fwlkefnlwkenfwe fwefnlwknfwe fwekfnwelf  wefwlefkwflwef weflwekfnlwef  wefkwefwe fwf efwkelfmweknfoiwrhfoetighutehgieetg egiherff eriferf gjerrnerfi erffo firjfer fggvierfnrnf fjprf foprjfirf oiejrvifwjirio irjfioerfoii ";
  mainContentView: any;

  constructor(
    public router: Router,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    console.log('id - ', this.id);
    const content = this.contentfulService.logContent('5sv3GOL9Kle18xRNBINJDw');
    console.log('contnent - ', content);
    this.mainContentView = (this.id.length) ? this. mainContent : this.mainContent.split(',')[0];

  }

  gotoFullView(id: any) {
    const url: string = "/posts/" + id
    this.router.navigateByUrl(url);
  }
}
