import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFormComponent } from './weather-form.component';

describe('WeatherFormComponent', () => {
  let component: WeatherFormComponent;
  let fixture: ComponentFixture<WeatherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
