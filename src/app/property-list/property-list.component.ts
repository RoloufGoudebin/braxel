import { Component, OnInit } from '@angular/core';
import { OmnicasaService } from '../omnicasa.service';
import { Observable } from 'rxjs';
import { PropertyList, Property } from '../interface';
import { response } from 'express';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  num:number = 9;

  constructor(public omnicasa: OmnicasaService) { }

  propertyList: Property[];
  propertyList9: Property[];

  ngOnInit(): void {
    this.omnicasa.getPropertyList()
      .subscribe(response => {
        this.propertyList = response.GetPropertyListJsonResult.Value.Items;
      })
  }

}
