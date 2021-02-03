import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import DataSnapshot = firebase.database.DataSnapshot;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'braxel';

  constructor() {
    const config = {
      apiKey: "AIzaSyAjMSJhRYvXa6WTo6rEJ69mFK6GhNfnpOA",
      authDomain: "braxel-255a8.firebaseapp.com",
      projectId: "braxel-255a8",
      storageBucket: "braxel-255a8.appspot.com",
      messagingSenderId: "147570260636",
      appId: "1:147570260636:web:227bb670099be7cac10b59",
      measurementId: "G-B850B6YJ2E"
    };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }
  }
}
