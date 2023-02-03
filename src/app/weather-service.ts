import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Weather } from "./weather";
import { WeatherResponce } from "./weather-responce";

@Injectable()
export class WeaherService {
    constructor(private http: HttpClient){

    }

    getWeather(lat: Number, long: Number) : Observable<Weather>{

        return this.http.get<WeatherResponce>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=d7179601e068ebed19527df14bae97c3&units=metric`)
            .pipe(map((data: WeatherResponce) => {

                const weatherItem = data.list[0];
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
                return weather;
            }));   
    }
}
