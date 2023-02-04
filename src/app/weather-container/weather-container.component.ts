import { Component } from '@angular/core';
import { Weather } from '../abstractions/weather';
import { WeaherService } from './get-weather.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent {
  city = ""
  lat = 53.9006
  long = 27.5590
  currentWeather : Weather = {
    dt: 0,
    temperature: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    weather: "Weather",
    weather_description: "Weather description",
    weather_icon: "04d"
  }

  constructor(private weatherService : WeaherService){
    weatherService.getWeather(this.lat, this.long).subscribe(data => {
      this.currentWeather = data
    });
  }

  getWeather() {
    this.weatherService.getWeather(this.lat, this.long).subscribe(data => {
      this.currentWeather = data
    });
  }

  onLatChanged(lat: number){
    this.lat = lat
  }

  onLongChanged(long: number){
    this.long = long
    this.getWeather()
  }

  setCurrentPosition() {    
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      this.lat = position.coords.latitude
      this.long = position.coords.longitude  
      this.city = ""
      this.getWeather();
    })
  }
}
