import { Component, Input } from '@angular/core';
import { Weather } from '../abstractions/weather';
import { enviroment } from 'src/environment/environment';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.css']
})
export class WeatherInformationComponent {
  @Input()
  get currentWeather(): Weather | null { return this._currentWeather; }
  set currentWeather(currentWeather: Weather | null) {
    this._currentWeather = currentWeather;
    this.imgSource = enviroment.getIconUrl + currentWeather?.weather_icon + "@2x.png"
  }
  
  private _currentWeather : Weather | null = null;
  imgSource : string = "";
}
