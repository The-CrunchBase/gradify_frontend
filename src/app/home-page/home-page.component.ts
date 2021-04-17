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
  mail_msg;
  registration_number;
  semester;
  sgpa_loading = false;
  pdf_loading = false;
  generating_pdf = false;
  sending_mail = false;
  show_form = true; 
  user_result;
  pdf_load_msg;
  public semList:{sem:string, year:string, value:string}[] = sems;

  constructor(private http:HttpClient) { }

  onSubmit(data){
    this.mail = false
    this.sgpa_loading = true
    console.log("sgpa generating....")
    return this.http.post(this.hosted_url+"/result/",data.value).subscribe((result)=>{
      console.log("sgpa genereted....")
      this.sgpa = result
      this.msg = this.sgpa.msg
      this.user_result = this.sgpa.data;
      if(this.msg == "Please enter valid Registration Number")  {
        this.sgpa = "**Please enter valid working registration number"
      }
      if(this.msg == "Result Not Found")  {
        this.sgpa = "**Result Not Found"
      }
      if(this.msg == "SGPA is calculated successfully") {
        this.sgpa = "Your SGPA is "+this.sgpa.data['sgpa']
      }
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
    this.sending_mail = true;
    this.pdf_loading = true
    this.mail = false
    console.log("sending mail...")
    return this.http.post(this.hosted_url+"/pdf/?mail=true",this.user_result).subscribe((result)=>{
        this.mail = result
        this.mail_msg = this.mail.msg
        console.log(this.mail.mail_msg)
        if(this.mail_msg == "Mail Sent Succesfully")  {
          this.pdf_loading = false
          this.sending_mail = false;
          this.mail = true
        }
        if(this.mail_msg == "Sorry!Mail not Sent...")  {
          this.pdf_loading = false
          this.sending_mail = false;
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
