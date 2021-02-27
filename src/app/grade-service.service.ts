import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  constructor(private http: HttpClient) { }
  url = 'https://crunchbase-gradify.herokuapp.com/result/2019bcs121/SEM3/'


  postapi(data) {
    return this.http.post(this.url, data)
  }
}
