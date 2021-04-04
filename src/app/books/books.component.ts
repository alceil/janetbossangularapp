import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  apidata:any;

  constructor(public http:HttpClient) { }
  ngOnInit(): void {
    this.http.get("https://janetlibraryappapi.herokuapp.com/books")
    .subscribe((companies)=>{
      this.apidata = companies;
      console.log(this.apidata)
    })
  }

}
