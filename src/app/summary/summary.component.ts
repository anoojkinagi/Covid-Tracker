import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private covidService: CovidServiceService) { }

  countrySummary = [];
  headElements = ['id','Country','TotalConfirmed','NewConfirmed','TotalDeaths','NewDeaths','TotalRecovered','NewRecovered']
  
  ngOnInit() {
    this.getCountrySummaryData();
  }

  getCountrySummaryData()
  {
     this.covidService.getSummary().subscribe((data)=>{
        this.countrySummary = data['Countries'];
        this.countrySummary.sort((a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed));
     })
  }

}
