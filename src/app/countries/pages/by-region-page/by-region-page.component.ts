import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

 
public countries : Country[]=[];

public regions: Region[]=['Africa','America','Asia','Europe','Oceania'];
public selectedRegion?: Region;
public initialValue: string='';

constructor( private CountriesServicerce: CountriesService){}

ngOnInit(): void {
  this.countries= this.CountriesServicerce.cacheStore.byRegion.countries,
  this.selectedRegion= this.CountriesServicerce.cacheStore.byRegion.region
  
}


searchByRegion(region: Region): void {
   
  this.selectedRegion= region;

 this.CountriesServicerce.searchRegion(region)
 .subscribe( countries =>{
  this.countries = countries
 }
 )
}
 
}
