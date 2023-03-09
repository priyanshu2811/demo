import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ParichayComponent } from './parichay/parichay.component';
import { WrapperPostEventsComponent } from './wrapper-post-events/wrapper-post-events.component';
import { EventsComponent } from './wrapper-post-events/events/events.component';
import { PostsHomeComponent } from './wrapper-post-events/posts-home/posts-home.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
];

@NgModule({
  declarations: [
    DefaultComponent,
    AboutComponent,
    EventsComponent,
    PostsHomeComponent,
    ContactUsComponent,
    ParichayComponent,
    WrapperPostEventsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DefaultModule { }
