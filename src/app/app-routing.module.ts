import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitedstatesComponent } from './unitedstates/unitedstates.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'united-states', component: UnitedstatesComponent },
  { path: '', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
