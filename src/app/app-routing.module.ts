import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalculateCGPAComponent } from './calculate-cgpa/calculate-cgpa.component';
import { FYPageComponent } from './fypage/fypage.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';

const routes: Routes = [
  {
    path: "analyzer/:reg/:branch/:sem/:sgpa/:name",
    component: AnalyzerComponent
  },
  {
    path: "maintenance",
    component: MaintenancePageComponent
  },
  {
    path: "feedback",
    component: FeedbackPageComponent
  },
  {
    path: "fy",
    component: FYPageComponent
  },
  {
    path: "cgpa",
    component: CalculateCGPAComponent
  },
  {
    path: "dev",
    component: DevelopersComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "",
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
