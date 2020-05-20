import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private covidService: CovidServiceService) { }
 

  newsArray:any;
  ngOnInit() {
    this.getNewsData();
  }


  getNewsData() {
    this.covidService.getNews().subscribe((data)=>{
      this.newsArray =data.slice(0,5);
    })
  }

}
