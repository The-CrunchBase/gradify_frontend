import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import sems from 'src/assets/json/sem.json';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  sgpa;
  reg;
  sem;
  load = false;
  url;
  show = false; 
  public semList:{sem:string, year:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.load=true;
    this.reg = data.value.reg
    this.sem = data.value.sem
    this.url = "https://crunchbase-gradify.herokuapp.com/result/"+this.reg+"/"+this.sem+"/"
    return this.http.get(this.url).subscribe((result)=>{
      this.sgpa = result
      this.sgpa = this.sgpa.data
      this.load=false;
      this.show=true;

    })
  }

  onClose(){
    this.show=false;
  }

  ngOnInit(): void {
  }

}
