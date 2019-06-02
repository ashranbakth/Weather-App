import { CityInformationService } from './../../city-information.service';
import { weather } from './../post';
import { Observable } from 'rxjs';
import { WeatherCallsService } from './../../weather-calls.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  posts$: Observable<weather>;
  cityName: string;

  constructor(private _weatherCallService: WeatherCallsService,
              private _cityInformationService: CityInformationService) { 
                
              }

  temperatureConverter(valNum: string): string {
    let value = Number(valNum);
    let result = ((value-273.15)*1.8)+32;
    return result.toFixed(2).toString();
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
  }

}
