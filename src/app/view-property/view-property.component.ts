import { Component, OnInit, Input } from '@angular/core';
import { Property, PropertyList } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { OmnicasaService } from '../omnicasa.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  propertyList: Property[];
  property: Property;
  id: number;

  constructor(private route: ActivatedRoute, public omnicasa: OmnicasaService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.omnicasa.getPropertyList()
    .subscribe(response => {
      this.propertyList = response.GetPropertyListJsonResult.Value.Items;
      for(let i = 0; i < this.propertyList.length; i++){
        if(this.propertyList[i].ID == this.id){
          this.property = this.propertyList[i];
        }
      }
    })
  }

}
