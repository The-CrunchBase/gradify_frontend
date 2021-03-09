import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import sems from 'src/assets/json/sem.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // https://crunchbase-gradify.herokuapp.com/
  sgpa;
  msg;
  pdf_link;
  pdf;
  pdf_url = "https://crunchbase-gradify.herokuapp.com";
  registration_number;
  semester;
  sgpa_loading = false;
  pdf_loading = false;
  generating_pdf = false;
  show_form = true; 
  generatePdf_link = "https://crunchbase-gradify.herokuapp.com/pdf/"
  user_result;
  pdf_load_msg;
  public semList:{sem:string, year:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.sgpa_loading = true
    this.registration_number = data.value.reg
    this.semester = data.value.sem
    console.log("sgpa generating....")
    var url = "https://crunchbase-gradify.herokuapp.com/result/"+this.registration_number+"/"+this.semester+"/"
    return this.http.get(url).subscribe((result)=>{
      console.log("sgpa genereted....")
      this.sgpa = result
      this.msg = this.sgpa.msg
      console.log(this.sgpa.msg)
      this.user_result = this.sgpa.data;
      // console.log(this.sgpa.data)
      if(this.msg == "Please enter valid Registration Number")  {
        this.sgpa = "**Please enter valid working registration number"
      }
      if(this.msg == "Result Not Found")  {
        this.sgpa = "**Result Not Found"
      }
      if(this.msg == "SGPA is calculated successfully") {
        this.sgpa = "Your SGPA is "+this.sgpa.data['sgpa']
      }
      // this.sgpa = this.sgpa.data['sgpa']
      this.sgpa_loading = false
      this.show_form=false;
    
    })
  }

  savePdf(){
      this.pdf_loading = true;
      this.pdf_load_msg = "**Please wait your pdf is generating"
      console.log("pdf generating....")
      return this.http.post(this.generatePdf_link,this.user_result).subscribe((result)=>{
          console.log("pdf genereted....")
          this.pdf_link = result
          this.pdf_link = this.pdf_link.data['pdf_file']
          this.pdf = this.pdf_url+this.pdf_link
          this.generating_pdf = true;
          this.pdf_loading = false;
          if (this.generating_pdf == true)  location.assign(this.pdf)
         setTimeout(this.closeLoading,1000)
        })
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
