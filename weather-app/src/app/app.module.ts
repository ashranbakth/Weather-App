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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThunderstorm, faCloudBolt, faCloudRain, faCloudShowersWater, faSnowflake,
         faTornado, faSmog, faSun, faCloud} from '@fortawesome/free-solid-svg-icons';
import { WeatherTypePipe } from './utilities/weather-to-icon';

@NgModule({
  declarations: [
    AppComponent,
    CitySearcherComponent,
    WeatherDetailsComponent,
    WeatherForecastComponent,
    WeatherTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule, 
  ],
  providers: [CityInformationService, WeatherCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faThunderstorm, 
                faCloudBolt, 
                faCloudRain, 
                faCloudShowersWater, 
                faSnowflake,
                faTornado,
                faSmog,
                faSun,
                faCloud);
  }
}
