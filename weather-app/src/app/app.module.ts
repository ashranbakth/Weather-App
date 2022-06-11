import { CityInformationService } from './../city-information.service';
import { WeatherCallsService } from './../weather-calls.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitySearcherComponent } from './city-searcher/city-searcher.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearcherComponent,
    WeatherDetailsComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityInformationService, WeatherCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
