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
  title = 'Weather Application';
  location = {};

  constructor() {}

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

  }
}
