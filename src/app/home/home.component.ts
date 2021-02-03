import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs'; 
import { AppComponent } from '../app.component';
import { FirepageService } from '../firepage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: string;

  constructor(private firepageService: FirepageService) {
  }

  ngOnInit(): void {
    this.getPage('baXHyUxZHqpxTWk8z6fu')
  }


  getPage(name: string){
    this.page = this.firepageService.getPage(name);
  }

}
