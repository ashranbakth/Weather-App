import { GeoLocation } from './../GeoLocation';
import { CityInformationService } from './../../city-information.service';
import { weather } from './../post';
import { Observable } from 'rxjs';
import { WeatherCallsService } from './../../weather-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  posts$: Observable<weather>;
  cityName: string;
  currentLocation$: Observable<GeoLocation>;

  constructor(private _weatherCallService: WeatherCallsService,
              private _cityInformationService: CityInformationService) { 
              }

  temperatureConverter(valNum: string): string {
    let value = Number(valNum);
    let result = ((value-273.15)*1.8)+32;
    return result.toFixed(2).toString();
  }

  // displayLocationInfo(position) {
  //   const lng = position.coords.longitude;
  //   const lat = position.coords.latitude;
  //   console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  //   this.currentLocation.latitude = lat;
  //   this.currentLocation.longitude = lng;
  // }

  getLocation(): Observable<GeoLocation> {
    return new Observable(obs => {
     navigator.geolocation.getCurrentPosition(
       success => {
         const current: GeoLocation = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude
         }
         obs.next(current);
         obs.complete();
       },
       error => {
         obs.error(error);
       }
     );
   });
   }


  ngOnInit() {
    this._cityInformationService.cityName$.
      subscribe(newCity => {
        this.cityName = newCity;
        this.posts$ = this._weatherCallService.
          getCurrentWeatherByCity(this.cityName);
      });

    this.posts$ = this._weatherCallService.
      getCurrentWeatherByCity(this.cityName);
    this.currentLocation$ = this.getLocation();
    this.currentLocation$.subscribe(data => console.log('data ', data))
  }

}
