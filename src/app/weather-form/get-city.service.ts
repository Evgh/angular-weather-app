import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { City } from "../abstractions/city";
import { enviroment } from "src/environment/environment";

@Injectable()
export class CityService {
    constructor(private http: HttpClient) {
    }

    getCity(city: string): Observable<City[]> {
        return this.http.get<City[]>(`${enviroment.getCityUrl}?q=${city}&appid=${enviroment.apiKey}`);
    }
}