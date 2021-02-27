import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SGPAComponent } from './sgpa/sgpa.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  
  {
    path: "sgpa",
    component: SGPAComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
