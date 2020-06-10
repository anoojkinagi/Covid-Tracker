import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import {HttpClientModule} from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';
import { NewsComponent } from './news/news.component';
import { UnitedstatesComponent } from './unitedstates/unitedstates.component';
import { HomeComponent } from './home/home.component';
import { SymptomsComponent } from './symptoms/symptoms.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    SummaryComponent,
    NewsComponent,
    UnitedstatesComponent,
    HomeComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
