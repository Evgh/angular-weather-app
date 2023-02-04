export interface WeatherResponce {
    cod: string
    message: number
    cnt: number
    list: Array<WeatherItem>
}

export interface WeatherMain {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
}

export interface WeatherItem {
    dt: number
    main: WeatherMain
    weather: Array<WeatherObject>
}

export interface WeatherObject {
    main: string
    description: string
    icon: string
}



