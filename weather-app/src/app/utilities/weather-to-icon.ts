import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherType',
})
export class WeatherTypePipe implements PipeTransform {
  weatherMainToFontawesome = {
    Thunderstorm: 'thunderstorm',
    Drizzle: 'cloud-drizzle',
    Rain: 'cloud-rain',
    Snow: 'snowflake',
    Mist: 'smog',
    Smoke: 'smog',
    Haze: 'smog',
    Dust: 'smog',
    Fog: 'smog',
    Sand: 'smog',
    Ash: 'smog',
    Squall: 'smog',
    Tornado: 'tornado',
    Clear: 'sun',
    Clouds: 'cloud',
  };

  transform(weather: string): string {
    return this.weatherMainToFontawesome[weather];
  }
}