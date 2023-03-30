import { environment } from './../environments/environment.development';
import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { post_data } from './data';
// import { observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    environment: environment.contentful.environment, // defaults to 'master' if not set
    accessToken: environment.contentful.token
  })

  constructor() { }

  logContent(contentId: any): any {
    const x = this.client.getEntry(contentId)
      .then((entry) => {
        return (entry);
      })
      return x;
;
  }

  postData(contentId?: any): JSON {
    const data = (contentId && contentId.length) ? JSON.parse(JSON.stringify(post_data.filter(posts => posts.post_id === contentId))): post_data;
    return data;
  }

  // client.getEntries()
  // .then((response) => console.log(response.items))
  // .catch(console.error)
}
