import { ContentfulService } from './contentful.service';
import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOyZXyIJ5STo7yRpc8a1bmUkZdUwrC28M",
  authDomain: "lokjigyasa.firebaseapp.com",
  projectId: "lokjigyasa",
  storageBucket: "lokjigyasa.appspot.com",
  messagingSenderId: "1070209314089",
  appId: "1:1070209314089:web:bf4941a737a21900dfdb38",
  measurementId: "G-QXN80QMWY5"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    console.log('analytics - ', analytics);
  }
}
