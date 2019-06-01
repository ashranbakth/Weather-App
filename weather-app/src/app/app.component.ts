import { WeatherCallsService } from './../weather-calls.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { weather } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  cityName: string = 'Detroit';
  countryCode: string = 'US';
  posts$: Observable<weather>;
  location = {};

  constructor(private _weatherCallService: WeatherCallsService) {}

  receiveMessage($event){
    this.cityName = $event;
    this.posts$ = this._weatherCallService.getCurrentWeatherByCity(this.cityName);
  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        return position.coords;
      });
    }else{
      return 'none';
    }
  }

  ngOnInit(){
    this.posts$ = this._weatherCallService.getCurrentWeatherByCity(this.cityName);
    // this.getPosts();
    this.location = this.getLocation();
  }
}
