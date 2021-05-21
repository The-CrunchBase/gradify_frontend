import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  responce;
  feedback(data){
    console.log(data.value);
    return this.http.post("https://crunchbase-gradify.herokuapp.com/feedback/",data.value).subscribe((result)=>{
      console.log("sgpa genereted....")
      this.responce = result
      console.log(result)
  });
  }

  ngOnInit(): void {
  }

}
