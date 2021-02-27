import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import sems from 'src/assets/json/sem.json';
declare var jQuery: any;

@Component({
  selector: 'app-sgpa',
  templateUrl: './sgpa.component.html',
  styleUrls: ['./sgpa.component.css']
})
export class SGPAComponent implements OnInit {

  sgpa;
  url = "http://localhost:8000/result/";
  show = false; 
  public semList:{sem:string, year:string}[] = sems;


  constructor(private http:HttpClient) { }

  onSubmit(data){
    console.log(data.value)
    return this.http.post(this.url,data.value).subscribe((result)=>{
      this.sgpa = result
      this.sgpa = this.sgpa.data
      console.log("sgpa = ",this.sgpa)
      this.show=true;
    })
  }

  onClose(){
    this.show=false;
  }

  
  ngOnInit(): void {
  }

}
