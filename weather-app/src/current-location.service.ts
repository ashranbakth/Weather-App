import { GeoLocation } from './app/GeoLocation';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {

  constructor() { }

  getLocation(): Observable<GeoLocation> {
    return new Observable(obs => {
     navigator.geolocation.getCurrentPosition(
       success => {
         const current: GeoLocation = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude
         }
         obs.next(current);
         obs.complete();
       },
       error => {
         obs.error(error);
       });
    });
  }
}
