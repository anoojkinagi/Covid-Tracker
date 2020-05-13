import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor(private covidService: CovidServiceService) { }

  summary:{};

  totalConfirmed: any;
  totalDeaths:  any;
  totalRecovered:  any;


  ngOnInit() {
    this.getSummaryData();
  }


  getSummaryData(){
    this.covidService.getSummary().subscribe((data)=> {
     // this.summary = data;
      this.totalConfirmed = data.Global.TotalConfirmed.toLocaleString('en-US');
      this.totalDeaths = data.Global.TotalDeaths.toLocaleString('en-US');

      this.totalRecovered = data.Global.TotalRecovered.toLocaleString('en-US');

    })

    
  }

}
