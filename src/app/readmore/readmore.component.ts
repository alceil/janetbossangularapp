import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
  apidata:any;
  constructor(private route:ActivatedRoute,public http:HttpClient) {
   }

   onClickDelete()
   {
    this.route.paramMap.subscribe(params=>{

      let id = params.get('id');
      this.http.get(`https://janetlibraryappapi.herokuapp.com/books/delete/${id}`)
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
 this.http.get(`https://janetlibraryappapi.herokuapp.com/books/${id}`)
.subscribe((companies)=>{
  this.apidata = companies;
  console.log(this.apidata)
})
  console.log(id);
})
}





}
