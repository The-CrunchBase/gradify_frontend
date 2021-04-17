import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

// My Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalculateCGPAComponent } from './calculate-cgpa/calculate-cgpa.component';
import { DevelopersComponent } from './developers/developers.component';
// My Modules


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculateCGPAComponent,
    DevelopersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
