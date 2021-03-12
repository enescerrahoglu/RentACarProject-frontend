import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/carDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44329/api/cars/getallcars';
  apiUrlDto = "https://localhost:44329/api/cars/getcardetaildtos";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }

  getCarsDto():Observable<CarDtoResponseModel> {
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrlDto)
  }
  
}
