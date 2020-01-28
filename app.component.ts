import { Component } from '@angular/core';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { WeatherService } from './weather.service';
import { City } from './models/cities.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] =[];  
  states: State[]=[];
  cities: City[]=[];
  selectedCountry:string='';
  selectedState:string='';
  selectedCity:string='';
  citiesWithAirQuality: City;
  pollution: any[];
  
  constructor(private dataService1:WeatherService) { }

  ngOnInit() {
    //alert("1");
    this.getCountryList();
  }

  getCountryList(): void {
    //alert("2");
    this.dataService1.getCountryList().subscribe(
      (countries1:Country[]) =>{
        this.countries = countries1;       
      }
    )
  }
 
  selectChangeHandler(ob) {
    // alert("23");
    this.selectedCountry = ob.value;
    //alert(this.selectedCountry);
    this.getStateList(this.selectedCountry);  
  }

  getStateList(selectedCountry): void {
    //alert("getStateList");
    //alert(this.selectedCountry);
    this.dataService1.getStateList(selectedCountry).subscribe(
      (states1:State[]) =>{
        //alert(state1);
        this.states = states1;       
      }
    )
  }

  selectChangeHandlerState(obs){
    this.selectedState = obs.value; 
    this.getCityList(this.selectedState, this.selectedCountry); 
  //  this.getAirQuality(this.cities, this.selectedState, this.selectedCountry );
  }

  getCityList(selectedState,selectedCountry): void {
    //alert(selectedState +" and "+selectedCountry);
    this.dataService1.getCityList(selectedState,selectedCountry).subscribe(
      (cities:City[]) =>{
        //alert(state1);
        this.cities = cities;
      }
    )
  }  

  selectChangeHandlerCity(obc){
    this.selectedCity = obc.value;
    alert(this.selectedCity);
  }

  getAirQuality(cities, selectedState, selectedCountry): void {  
  }
}

