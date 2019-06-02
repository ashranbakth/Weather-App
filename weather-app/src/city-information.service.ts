import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityInformationService {

  private citySource = new BehaviorSubject('Detroit');
  cityName$ = this.citySource.asObservable();

  constructor() { }

  changeCity(city: string){
    this.citySource.next(city);
  }
}
