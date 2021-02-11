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
  }
}
