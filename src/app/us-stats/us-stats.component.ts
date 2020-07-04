import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Chart } from 'chart.js';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-us-stats',
  templateUrl: './us-stats.component.html',
  styleUrls: ['./us-stats.component.css']
})
export class UsStatsComponent implements OnInit {

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
          maxTicksLimit: 10
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


  stateSlug = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania',
    'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']


  ngOnInit() {

  }

  getUSStats(state) {
    this.covidService.getUSTimeline(state).subscribe((res) => {
      
      var tempData = []
      var tempData1 = []
      var tempData2 = []
      var tempLabel = [];

      for (var i = 0; i < res.length; i++) {
        tempData.push(res[i]['cases']);
        tempData1.push(res[i]['deaths']);


        tempLabel.push(res[i]['date']);
      }

      var objConfirmed = {
        data: tempData, label: 'Confirmed'
      }
      this.chartData = [
        { data: tempData, label: 'Confirmed', fill: false },
        { data: tempData1, label: 'Deaths', fill: false },

      ]

      this.chartLabels = tempLabel;

    }
    )
  }

}
