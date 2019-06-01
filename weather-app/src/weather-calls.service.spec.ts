import { TestBed } from '@angular/core/testing';

import { WeatherCallsService } from './weather-calls.service';

describe('WeatherCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherCallsService = TestBed.get(WeatherCallsService);
    expect(service).toBeTruthy();
  });
});
