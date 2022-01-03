import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.css']
})
export class AnalyzerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  private routeSub: any;
  reg;
  branch;
  sem;
  res;
  rank;
  name;
  sgpa;
  sgpa_list;
  showYourRank = true;

  hosted_url = "https://crunchbase-gradify.herokuapp.com"
  // hosted_url = "http://localhost:8000"
  // frontend_url = "http://localhost:4200"
  frontend_url = "https://gradify-crunchbase.web.app/"

  analyzeResult() {
    console.log("working...")
    const fd = new FormData();
    fd.append("reg", this.reg);
    fd.append("branch", this.branch);
    fd.append("sem", this.sem);
    console.log(fd['values'])
    return this.http.post(this.hosted_url + "/analyzer/", fd).subscribe((result) => {
      this.res = result;
      this.rank = this.res['rank']
      this.sgpa_list = this.res['data']
      if(this.rank > 0 && this.rank < 4) this.showYourRank = false;
      console.log(this.rank + " " + this.sgpa_list)
    })
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(para => {
      this.reg = para['reg']
      this.reg = this.reg.toLowerCase( )
      this.branch = para['branch']
      this.sem = para['sem']
      this.sgpa = para['sgpa']
      this.name = para['name']
      console.log(this.reg + " " + this.sem + " " + this.branch + " ")
      this.analyzeResult()
    })
  }

}
