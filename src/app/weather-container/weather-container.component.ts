import { Component, DoCheck } from '@angular/core';
import { Weather } from '../weather';
import { WeaherService } from '../weather-service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements DoCheck {
  sity = "Sity"
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
      this.currentWeather = data;
    });
  }

  setCurrentPosition() {    
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      this.lat = position.coords.latitude
      this.long = position.coords.longitude  
    })
  }

  getWeather() {
    this.weatherService.getWeather(this.lat, this.long).subscribe(data => {
      this.currentWeather = data;
    });
  }

  ngDoCheck(): void {
    if(this.lat > 90)
      this.lat = 90
    else if(this.lat < -90)
      this.lat = -90

    if(this.long > 180)
      this.long = 180
    else if(this.long < -180)
      this.long = -180

    console.log("Do check");
  }
}
