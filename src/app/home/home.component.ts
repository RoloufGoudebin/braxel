import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs'; 
import { AppComponent } from '../app.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }
}
