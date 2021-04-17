import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import sems from 'src/assets/json/sem.json';
@Component({
  selector: 'app-calculate-cgpa',
  templateUrl: './calculate-cgpa.component.html',
  styleUrls: ['./calculate-cgpa.component.css']
})
export class CalculateCGPAComponent implements OnInit {

  hosted_url = "https://crunchbase-gradify.herokuapp.com"
  // local_url = "http://localhost:8000"
  cgpa;
  semester;
  show_inputs = false;
  sgpa_loading = false;
  pdf_loading = false;
  generating_pdf = false;
  sending_mail = false;
  show_form = true; 
  show_popupform = false;
  user_result;
  pdf_load_msg;
  sems;
  dict = [];
  public semList:{sem:string, year:string, value:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.semester = data.value.sem;
    console.log(this.semester);
    for(var i=1;i<=this.semester;i++){
      this.dict.push();
    }
    this.show_form = false;
    this.show_inputs = true;
  }

  
  
  closeLoading(){
    this.pdf_loading = false;
    console.log(this.pdf_loading)
  }

  onClose(){
    this.show_form=true;
  }

  ngOnInit(): void {
  }

}
