import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import sems from 'src/assets/json/sem.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  hosted_url = "https://crunchbase-gradify.herokuapp.com"
  // local_url = "http://localhost:8000"
  sgpa;
  msg;
  pdf_link;
  pdf;
  mail;
  // pdf_url = "https://crunchbase-gradify.herokuapp.com";
  registration_number;
  semester;
  sgpa_loading = false;
  pdf_loading = false;
  generating_pdf = false;
  sending_mail = false;
  show_form = true; 
  // generatePdf_link = "https://crunchbase-gradify.herokuapp.com/pdf/"
  user_result;
  pdf_load_msg;
  public semList:{sem:string, year:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.mail = false
    this.sgpa_loading = true
    console.log("sgpa generating....")
    return this.http.post(this.hosted_url+"/result/",data.value).subscribe((result)=>{
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
      this.mail = false
      this.pdf_loading = true;
      console.log("pdf generating....")
      return this.http.post(this.hosted_url+"/pdf/",this.user_result).subscribe((result)=>{
          console.log("pdf genereted....")
          this.pdf_link = result
          this.pdf_link = this.pdf_link.data['pdf']
          this.pdf = this.hosted_url+this.pdf_link
          this.generating_pdf = true;
          this.pdf_loading = false;
          if (this.generating_pdf == true)  location.assign(this.pdf)
        })
  }

  sendMail(){
    this.mail = false
    this.sending_mail = true;
    console.log("sending mail...")
    return this.http.post(this.hosted_url+"/pdf/?mail=true",this.user_result).subscribe((result)=>{
        this.mail = result
        this.msg = this.mail.msg
        console.log(this.mail.msg)
        // console.log(this.sgpa.data)
        if(this.msg == "Mail Sent Succesfully")  {
          this.mail = true
        }
        if(this.msg == "Sorry!Mail not Sent...")  {
          this.mail = false
        }
      })
}

  
  closeLoading(){
    this.mail = false
    this.pdf_loading = false;
    console.log(this.pdf_loading)
  }

  onClose(){
    this.mail = false
    this.show_form=true;
  }

  ngOnInit(): void {
  }

}
