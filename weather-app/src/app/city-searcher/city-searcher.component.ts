import { CityInformationService } from './../../city-information.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-city-searcher',
  templateUrl: './city-searcher.component.html',
  styleUrls: ['./city-searcher.component.scss']
})
export class CitySearcherComponent implements OnInit {

  constructor(private _cityInformationService: CityInformationService) { }

  onEnter(value: string) { 
    this._cityInformationService.changeCity(value);
  }

  ngOnInit() {
  }
}
