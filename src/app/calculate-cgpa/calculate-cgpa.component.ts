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
  val;
  sems;
  sum = 0;
  sgpa;
  sem_list= [{key:"key", value:"value"}];
  public semList:{sem:string, year:string, value:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.semester = data.value.sem;
    console.log(this.semester);
    for(var i=1;i<=this.semester;i++){
      this.sem_list.push({
        key:   "SEM"+i,
        value: "Enter Your SEM"+i+" SGPA"
    });
    }
    this.sem_list.splice(0,1);
    console.log(this.sem_list);
    this.show_form = false;
    this.show_inputs = true;
  }

  calculateCGPA(data){
    this.sum = 0;
    for(var i=1;i<=this.semester;i++){
      this.val = "SEM"+i,
      this.sgpa = +data.value[this.val];
      this.sum = this.sum + this.sgpa;
      console.log(this.sum);
    }
    this.cgpa = (this.sum/this.semester).toFixed(2);
    console.log(this.cgpa);
    this.show_popupform=true;
    this.show_form = false;
    this.show_inputs = false;
  }

  
  
  closeLoading(){
    this.pdf_loading = false;
    console.log(this.pdf_loading)
  }

  onClose(){
    this.show_popupform=false;
    this.show_form = false;
    this.show_inputs = true;
  }

  ngOnInit(): void {
  }

}
