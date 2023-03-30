import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper-post-events',
  templateUrl: './wrapper-post-events.component.html',
  styleUrls: ['./wrapper-post-events.component.scss']
})
export class WrapperPostEventsComponent {
  isEvents = false;

  selection(option: number) {
    console.log(option);
    switch (option) {
      case 1: this.isEvents = false; break;
      case 2: this.isEvents = true; break;
      default: this.isEvents = false;
    }
  }

}
