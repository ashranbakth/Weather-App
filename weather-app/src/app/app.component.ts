import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  api_key: string = 'e1d6d4304bf143926ad65c4bf48f8429';
  location = {};

  readonly ROOT_URL: string = `https://api.openweathermap.org/data/2.5/weather`;
  constructor(private http: HttpClient) {}

  getPosts(){
    this.posts$ = this.http.get<weather>(this.ROOT_URL + `?q=${this.cityName}&APPID=${this.api_key}`);
  }

  receiveMessage($event){
    this.cityName = $event;
    this.getPosts();
  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        this.location = position.coords;
      });
    }else{
      return 'none';
    }
  }

  ngOnInit(){
    this.getPosts();
    this.getLocation();
  }
}
