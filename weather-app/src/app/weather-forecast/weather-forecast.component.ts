import { Component, OnInit } from '@angular/core';
import { WeatherCallsService } from 'src/weather-calls.service';
import { CityInformationService } from 'src/city-information.service';
import { CurrentLocationService } from 'src/current-location.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  weatherForecast$: Observable<any>;
  cityName: string;

  constructor(private _weatherCallService: WeatherCallsService,
    private _cityInformationService: CityInformationService,
    private _currentLocationService: CurrentLocationService) { }

  ngOnInit() {
    this.subscription.add(this._cityInformationService.cityName$.
      subscribe(newCity => {
        this.cityName = newCity;
        this.weatherForecast$ = this._weatherCallService.
          getTenDayWeatherForecastByCity(newCity);
      }));

      this.weatherForecast$ = this._weatherCallService.getTenDayWeatherForecastByCity(this.cityName);
      this.weatherForecast$.subscribe(data => 
        console.log(data));



  }

}
