import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Chart } from 'chart.js';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.css']
})
export class GlobalStatsComponent implements OnInit {


  constructor(private covidService: CovidServiceService) { }


  chartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        type: 'time',
        distribution: 'series',
        gridLines: {
          display: true
        },

        ticks: {
          autoSkip: true,
          maxTicksLimit: 9
        }
      }],

      yAxes: [
        {
          ticks: {
            callback: function (val) {
              return val.toLocaleString();
            }
          }
        }
      ]


    }

  };


  noOfCases: [];
  dates: []

  chartData = [
    { data: [], label: '', fill: false }

  ];

  chartData1: [{}];

  chartLabels = [];
  chartLabels1 = [];
  // tempData = []
  // tempData1 = []
  // tempData2 = []
  //  tempLabel=[];

  countrySlug = [];





  ngOnInit() {
    //this.getGlobalStats("united-states");
    this.getCountries();
  }



  getGlobalStats(selectedCountry) {


    this.covidService.getCountryTimeline(selectedCountry).subscribe((res) => {

      var tempData = []
      var tempData1 = []
      var tempData2 = []
      var tempLabel = [];

      for (var i = 0; i < res.length; i++) {
        tempData.push(res[i]['Confirmed']);
        tempData1.push(res[i]['Deaths']);
        tempData2.push(res[i]['Recovered']);

        tempLabel.push(res[i]['Date']);
      }


      var objConfirmed = {
        data: tempData, label: 'Confirmed'
      }
      this.chartData = [
        { data: tempData, label: 'Confirmed', fill: false },
        { data: tempData1, label: 'Deaths', fill: false },
        { data: tempData2, label: 'Recovered', fill: false }
      ]

      this.chartLabels = tempLabel;


    })


  }


  getCountries() {
    this.covidService.getCountries().subscribe((res) => {

      console.log(res);

      for (var i = 0; i < res.length; i++) {
        this.countrySlug.push(res[i]['Country']);
      }
      this.countrySlug.sort();
    })
  }






}
