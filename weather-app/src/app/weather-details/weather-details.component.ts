import { CurrentLocationService } from './../../current-location.service';
import { GeoLocation } from './../GeoLocation';
import { CityInformationService } from './../../city-information.service';
import { weather } from './../post';
import { Observable, Subscription } from 'rxjs';
import { WeatherCallsService } from './../../weather-calls.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  weatherDetail$: Observable<weather>;
  cityName: string;
  currentLocation$: Observable<GeoLocation>;

  constructor(private _weatherCallService: WeatherCallsService,
              private _cityInformationService: CityInformationService,
              private _currentLocationService: CurrentLocationService) { 
              }

  /**
   * Description: Converts the string number from Kelvin to Fahrenheit.
   * @param valNum - The temperature in Kelvin units
   */
  temperatureConverter(valNum: string): string {
    let value = Number(valNum);
    let result = ((value-273.15)*1.8)+32;
    return result.toFixed(2).toString();
  }

  ngOnInit() {
    this.subscription.add(this._cityInformationService.cityName$.
      subscribe(newCity => {
        this.cityName = newCity;
        this.weatherDetail$ = this._weatherCallService.
          getCurrentWeatherByCity(this.cityName);
    }));

    this.weatherDetail$ = this._weatherCallService.
      getCurrentWeatherByCity(this.cityName);

    // this.currentLocation$ = this._currentLocationService.getLocation();

    // this.subscription.add(this.currentLocation$.subscribe(coordinate => {
    //   this.weatherDetail$ = this._weatherCallService.getCurrentWeatherByCoordinate(coordinate);
    // }));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
