import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { City } from './models/cities.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  MY_API_KEY:String = "02176ac0-468f-493b-9c84-1e94ee5e53f8";
  
  countryUrl:string = "https://api.airvisual.com/v2/countries?key="+this.MY_API_KEY;
  cityUrl:string;
  constructor(private http: HttpClient) { }

  public getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);      
  } 

  public getStateList(selectedCountry:string): Observable<State[]> {  
    //alert(selectedCountry)     ;
   // console.log(this.http.get<State[]>("https://api.airvisual.com/v2/states?country=" + "India" +"&key=" + this.MY_API_KEY));
    return (this.http.get<State[]>("https://api.airvisual.com/v2/states?country=" + selectedCountry +"&key=" + this.MY_API_KEY));         
  }  

  public getCityList(selectedState,selectedCountry):Observable<City[]>{
   // alert(selectedState + " in serbice " + selectedCountry);

    this.cityUrl="https://api.airvisual.com/v2/cities?state="+ selectedState + "&country=" +selectedCountry+ "&key=" + this.MY_API_KEY;
    //alert(this.cityUrl);
    //console.log(this.cityUrl);
    return (this.http.get<City[]>(this.cityUrl).pipe(map((res:City[]) =><City[]>res)));       
  }


    public getAirQualtiy(cities: City[], selectedState:string, selectedCountry:string): Observable<any> {
      
      return null;
    }    
}
