import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
businessapi="https://newsapi.org/v2/top-headlines?country=ae&category=business&apiKey=39f27e8209b3499bb570804c1a0eaf78"
techapi = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=39f27e8209b3499bb570804c1a0eaf78"
sportsapi =   "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=39f27e8209b3499bb570804c1a0eaf78"

constructor(private http:HttpClient) { }

  businessnews():Observable<any>{
    return this.http.get(this.businessapi)
  }
  technews():Observable<any>{
    return this.http.get(this.techapi)
  }
  sportsnews():Observable<any>{
    return this.http.get(this.sportsapi)
  }
}
