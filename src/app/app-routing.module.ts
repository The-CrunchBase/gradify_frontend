import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalculateCGPAComponent } from './calculate-cgpa/calculate-cgpa.component';

const routes: Routes = [
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
