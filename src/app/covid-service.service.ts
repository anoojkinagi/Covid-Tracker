import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {


  constructor(private http: HttpClient) { }

   summaryApi = "https://api.covid19api.com/summary";
   newsApi= "https://covidtracking.com/api/press";

  getSummary() {

     return this.http.get<{}>(this.summaryApi);

  }

  getNews() {

    return this.http.get<[]>(this.newsApi);

  }

  


}
