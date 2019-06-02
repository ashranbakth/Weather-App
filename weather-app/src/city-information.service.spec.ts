import { TestBed } from '@angular/core/testing';

import { CityInformationService } from './city-information.service';

describe('CityInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityInformationService = TestBed.get(CityInformationService);
    expect(service).toBeTruthy();
  });
});
