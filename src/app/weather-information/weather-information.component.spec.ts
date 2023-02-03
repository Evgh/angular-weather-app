import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationComponent } from './weather-information.component';

describe('WeatherInformationComponent', () => {
  let component: WeatherInformationComponent;
  let fixture: ComponentFixture<WeatherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
