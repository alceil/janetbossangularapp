import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  selectedFile: File;
  resultUrl:string;
  
  book = {
     title:'' ,
     author: '',
     genre:'' ,
     image :''
    }

    onFileSelected(event:any){
      this.selectedFile = <File>event.target.files[0];
      console.log(this.selectedFile);
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      this._http.post<any>("https://janetlibraryappapi.herokuapp.com/addauthor/upload",fd)
    .subscribe((data)=>{
      (
      this.resultUrl=data["url"],
      this.book.image = this.resultUrl,
      console.log(this.resultUrl)
        )
    })

    }


  constructor(private _auth:AuthService,private _router: Router,private _http:HttpClient) 
  {
   }




  ngOnInit(): void {
  }


  addBook(){
    console.log(this.book);
    this._auth.addBook(this.book)

    this._router.navigateByUrl('/books')
  }

}
