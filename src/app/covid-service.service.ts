import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {


  constructor(private http: HttpClient) { }

   summaryApi = "https://api.covid19api.com/summary";
   newsApi= "https://covidtracking.com/api/press";
   usStatesCovidApi = "https://covidtracking.com/api/states";
   usTotalApi= "https://api.covid19api.com/total/country/us";

  getSummary() {

     return this.http.get<{}>(this.summaryApi);

  }

  getNews() {

    return this.http.get<[]>(this.newsApi);

  }

  getUsStatesCovid() {

    return this.http.get<[]>(this.usStatesCovidApi);

  }


  getUSTotal() {

    return this.http.get<[]>(this.usTotalApi);

  }

  


}
