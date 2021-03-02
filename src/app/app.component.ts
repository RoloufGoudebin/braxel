import { Component, OnInit } from '@angular/core';
import { OmnicasaService } from './omnicasa.service';
import { PropertyList, Property } from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'braxel';

  constructor(public omnicasa: OmnicasaService) {
  }




}
