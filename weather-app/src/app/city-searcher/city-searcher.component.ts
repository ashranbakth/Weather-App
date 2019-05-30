import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-searcher',
  templateUrl: './city-searcher.component.html',
  styleUrls: ['./city-searcher.component.scss']
})
export class CitySearcherComponent implements OnInit {

  cityName: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string) { 
    this.cityName = value;
    this.messageEvent.emit(this.cityName);
  }
}
