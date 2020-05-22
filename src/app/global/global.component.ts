import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Observable, throwError } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor(private covidService: CovidServiceService, public router: Router) { }

  summary:{}
  

  totalConfirmed: any;
  totalDeaths:  any;
  totalRecovered:  any;
  
  totalConfirmedUS: any;
  totalDeathsUS: any;
  totalRecoveredUS:  any;

  ngOnInit() {
    this.getSummaryData();
    this.getUSData();
  }


  getSummaryData(){
    
      this.covidService.getSummary().subscribe((data)=> {
        this.summary = data;
        
       
        this.totalConfirmed = data['Global']['TotalConfirmed'].toLocaleString('en-US');
        this.totalDeaths = data['Global']['TotalDeaths'].toLocaleString('en-US');
  
        this.totalRecovered = data['Global']['TotalRecovered'].toLocaleString('en-US');
       
      })
    
  }

  getUSData() {

    this.covidService.getUSTotal().subscribe((data)=>{

      this.totalConfirmedUS =data[data.length-1]['Confirmed'];
      this.totalDeathsUS =data[data.length-1]['Deaths'];
      this.totalRecoveredUS =data[data.length-1]['Recovered'];
      
      
      
    })

  }

}
