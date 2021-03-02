import { Component, OnInit, Input } from '@angular/core';
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


  constructor(public omnicasa: OmnicasaService) { }


  propertyList: Property[];

  ngOnInit(): void{
    this.getPropertyList();
  }

  getPropertyList(){
    this.omnicasa.getPropertyList()
    .subscribe(response => {
      this.propertyList = response.GetPropertyListJsonResult.Value.Items;
      console.log(this.propertyList);
    })
  }
}
