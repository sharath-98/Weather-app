import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData?: WeatherData;
  cityName:string = "London";

  constructor(private weatherService: WeatherService) { }
  
  ngOnInit(): void {
    this.getData(this.cityName);
    this.cityName = "";
  }

  OnSubmit() {
    this.getData(this.cityName);
    this.cityName = "";
  }

  getData(cityName : string) {
    
    this.weatherService.getWeatherData(cityName).subscribe((data) =>
    {
      console.log(data)
      this.weatherData = data;
    });
  }

  }
