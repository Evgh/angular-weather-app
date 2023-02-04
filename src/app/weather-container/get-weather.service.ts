import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from "../abstractions/weather";
import { WeatherResponce } from "./get-weather-responce";
import { enviroment } from "src/environment/environment";

@Injectable()
export class WeaherService {
    constructor(private http: HttpClient){
    }

    getWeather(lat: Number, long: Number) : Observable<Weather> {
        return this.http.get<WeatherResponce>(`${enviroment.getWeatherUrl}?lat=${lat}&lon=${long}&appid=${enviroment.apiKey}&units=metric`)
            .pipe(map((data: WeatherResponce) => {

                const weatherItem = data.list[0]
                const weather: Weather = {
                    dt: weatherItem.dt,
                    temperature: weatherItem.main.temp,
                    feels_like: weatherItem.main.feels_like,
                    pressure: weatherItem.main.pressure,
                    humidity: weatherItem.main.humidity,
                    weather: weatherItem.weather[0].main,
                    weather_description: weatherItem.weather[0].description,
                    weather_icon: weatherItem.weather[0].icon
                }
                return weather
            }))   
    }
}
