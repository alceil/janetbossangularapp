import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  apidata:any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://janetlibraryappapi.herokuapp.com/authors")
    .subscribe((companies)=>{
      this.apidata = companies;
      console.log(this.apidata)
    })
  }

}
