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
import { FYPageComponent } from './fypage/fypage.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';

// My Modules


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculateCGPAComponent,
    DevelopersComponent,
    FYPageComponent,
    FeedbackPageComponent,
    MaintenancePageComponent,
    AnalyzerComponent
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
