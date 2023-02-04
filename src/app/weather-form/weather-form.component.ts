import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../abstractions/city';
import { CityService } from './get-city.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {
  @Output('lat') lat = new EventEmitter<number>()
  @Output('long') long = new EventEmitter<number>()

  @Input('cityName') cityName : string = "" 
  @Input('responceCityName') responceCityName: string = ""

  constructor(private cityService: CityService){

  }

  onSearchChange(searchValue: string): void {  
    this.cityService.getCity(searchValue).subscribe((city : City[]) => {      
      
      try {
        this.responceCityName = city[0].name
        this.lat.emit(city[0].lat)
        this.long.emit(city[0].lon)

        console.log(`city: ${city[0].name} lat: ${city[0].lat} lon: ${city[0].lon}`);
      }
      catch {
        this.responceCityName = "City not found"
      }
    })
  }
}
