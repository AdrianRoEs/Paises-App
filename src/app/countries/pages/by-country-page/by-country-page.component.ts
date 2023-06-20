import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent  implements OnInit {

public countries : Country[]=[];
public initialValue: string='';

constructor( private countriServerce: CountriesService){}

ngOnInit(): void {
  this.countries= this.countriServerce.cacheStore.byCountries.countries,
  this.initialValue= this.countriServerce.cacheStore.byCountries.termi

}

searchByCountry(term: string): void {
 this.countriServerce.searchCountry(term)
 .subscribe( countries =>{
  this.countries = countries
 }
 )
}
  

}
