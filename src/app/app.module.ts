import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';

import { WeaherService } from './weather-service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherInformationComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WeaherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
