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
     console.log("NEWS ",data);
      this.newsArray =data['articles'];
      this.newsArray = this.newsArray.slice(0,5);
      console.log(this.newsArray);

    })
  }

}
