import { GeoLocation } from './app/GeoLocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { weather } from './app/post';


@Injectable({
  providedIn: 'root'
})
export class WeatherCallsService {

  constructor(private http: HttpClient) { }

  ApiKey: string = 'e1d6d4304bf143926ad65c4bf48f8429';
  readonly ROOT_URL_CURRENT_WEATHER: string = `https://api.openweathermap.org/data/2.5/weather`;
  readonly ROOT_URL_TENDAY_FORECAST: string = `https://api.openweathermap.org/data/2.5/forecast`;


  getCurrentWeatherByCity(cityName: string): Observable<weather> {
    return this.http.get<weather>(`${this.ROOT_URL_CURRENT_WEATHER}?q=${cityName}&appid=${this.ApiKey}`);
  }

  getCurrentWeatherByCoordinate(coordinates: GeoLocation): Observable<weather> {
    return this.http.get<weather>(`${this.ROOT_URL_CURRENT_WEATHER}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.ApiKey}`);
  }

  getTenDayWeatherForecastByCity(cityName: string): Observable<any> {
    return this.http.get<any>(`${this.ROOT_URL_TENDAY_FORECAST}?q=${cityName}&appid=${this.ApiKey}`);
  }

}
