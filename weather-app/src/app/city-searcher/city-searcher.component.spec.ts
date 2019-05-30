import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearcherComponent } from './city-searcher.component';

describe('CitySearcherComponent', () => {
  let component: CitySearcherComponent;
  let fixture: ComponentFixture<CitySearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
