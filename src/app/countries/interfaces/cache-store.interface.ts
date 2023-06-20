import { Country } from "./countries";
import { Region } from "./region.type";



export interface CacheStore{
    byCapital  : TermCountries,
    byCountries: TermCountries,
    byRegion   : RegionCountries

}

export interface TermCountries{
    termi    : string,
    countries: Country[]
}

export interface RegionCountries{
    region   : Region,
    countries: Country[]
}