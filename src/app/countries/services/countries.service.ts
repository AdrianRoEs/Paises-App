import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/countries';


@Injectable({providedIn: 'root'})


export class CountriesService {

    private apiUrl: string= 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }



    searchCountryByAlphaCode( code : string): Observable<Country | null>{
        const url= `${this.apiUrl}/alpha/${code}`;
   
        return  this.http.get<Country[]>( url)
        .pipe(
            map( countries => countries.length > 0? countries[0]: null),
            catchError( () => of( null ))
        )

    }
    

    searchCapital(termi: string): Observable<Country[]> {
        
        const url= `${this.apiUrl}/capital/${termi}`;
   
        return  this.http.get<Country[]>( url)
        .pipe(
            catchError( () => of([]))
        )
    }


    searchCountry( termi : string): Observable<Country[]>{
     const url= `${this.apiUrl}/name/${termi}`;
     return this.http.get<Country[]>(url)
     .pipe(
        catchError( () => of([]))
    )
    }

    searchRegion(region : string):Observable<Country[]>{
        const url= `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url)
        .pipe(
           catchError( () => of([]))
       )
    }


    

}