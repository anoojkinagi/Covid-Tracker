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
   proxyUrl = "https://cors-anywhere.herokuapp.com/";
   countriesUrl = "https://api-corona.azurewebsites.net/country";
   countryTimelineUrl = "https://api-corona.azurewebsites.net/timeline/";
   USTimelineUrl = "https://disease.sh/v3/covid-19/nyt/states/";

  getSummary() {

     return this.http.get<{}>(this.summaryApi);

  }

  // getNews() {

  //   return this.http.get<any>(this.newsApi);

  // }

  getCountries() {

    return this.http.get<any>(this.countriesUrl);

  }


  getCountryTimeline(country) {

    return this.http.get<any>(this.countryTimelineUrl+country);

  }

  getUSTimeline(state) {

    return this.http.get<any>(this.USTimelineUrl+state);

  }


  getUsStatesCovid() {

    return this.http.get<[]>(this.usStatesCovidApi);

  }


  getUSTotal() {

    return this.http.get<[]>(this.usTotalApi);

  }

  


}
