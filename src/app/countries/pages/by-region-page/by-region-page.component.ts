import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent  {

  
public countries : Country[]=[];

constructor( private CountriesServicerce: CountriesService){}


searchByRegion(region: string): void {
 this.CountriesServicerce.searchRegion(region)
 .subscribe( countries =>{
  this.countries = countries
 }
 )
}
 
}