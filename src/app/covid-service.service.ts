import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {


  constructor(private http: HttpClient) { }

   summaryApi = "https://api.covid19api.com/summary";
   newsApi= "https://newsapi.org/v2/top-headlines?country=us&q=coronavirus&sortBy=popularity&apiKey=0944ec81ee7c46bd9de8a04b016fe975";
   usStatesCovidApi = "https://covidtracking.com/api/states";
   usTotalApi= "https://api.covid19api.com/total/country/us";

  getSummary() {

     return this.http.get<{}>(this.summaryApi);

  }

  getNews() {

    return this.http.get<any>(this.newsApi);

  }

  getUsStatesCovid() {

    return this.http.get<[]>(this.usStatesCovidApi);

  }


  getUSTotal() {

    return this.http.get<[]>(this.usTotalApi);

  }

  


}
