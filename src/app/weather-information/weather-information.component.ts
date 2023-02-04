import { Component, Input } from '@angular/core';
import { Weather } from '../abstractions/weather';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.css']
})
export class WeatherInformationComponent {
  @Input('currentWeather') currentWeather : Weather | null = null;
}
