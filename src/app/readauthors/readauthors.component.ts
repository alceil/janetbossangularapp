import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readauthors',
  templateUrl: './readauthors.component.html',
  styleUrls: ['./readauthors.component.css']
})
export class ReadauthorsComponent implements OnInit {
  apidata:any;
  constructor(private route:ActivatedRoute,public http:HttpClient) { }


  onClickDelete()
  {
   this.route.paramMap.subscribe(params=>{

     let id = params.get('id');
     this.http.get(`https://janetlibraryappapi.herokuapp.com/authors/delete/${id}`)
    .subscribe((companies)=>{
      this.apidata = companies;
      console.log(this.apidata)
    })
      console.log(id);
    })

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{

      let id = params.get('id');
      this.http.get(`https://janetlibraryappapi.herokuapp.com/authors/${id}`)
     .subscribe((companies)=>{
       this.apidata = companies;
       console.log(this.apidata)
     })
       console.log(id);
     })
  }

}
