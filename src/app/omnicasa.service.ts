import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyList, Property } from './interface';

@Injectable({
  providedIn: 'root'
})
export class OmnicasaService {

  constructor(public http: HttpClient) { }

  getPropertyList() {
    return this.http.get<PropertyList>("http://newapi.omnicasa.com/1.12/OmnicasaService.svc/GetPropertyListJson?json={%27Status%27:%272%27,%20%27Zips%27:%271410%27,%20%27DescriptionLanguageId%27:2,%20%27LanguageId%27:2,%20%27CustomerName%27:%27braxel%27,%20%27CustomerPassword%27:%27b688E6B8FDD2%27}");
  }
}
