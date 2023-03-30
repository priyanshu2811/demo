import { environment } from './../environments/environment.development';
import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
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

  // client.getEntries()
  // .then((response) => console.log(response.items))
  // .catch(console.error)
}
