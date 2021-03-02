import { Component, OnInit, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs'; 
import { AppComponent } from '../app.component';
import { Property } from '../interface';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() propertyList: Property[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
