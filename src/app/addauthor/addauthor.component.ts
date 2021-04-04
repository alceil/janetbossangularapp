import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  ngOnInit(): void {
  }
  selectedFile: File;
  resultUrl:string;

  constructor(private _auth:AuthService,private _http:HttpClient) { }
  

  author =
  
  {
    author: '',
    image :'',
    details: ''
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
     this.author.image = this.resultUrl,
     console.log(this.resultUrl)
       )
   })
  }
  addAuthor(){
    console.log(this.author);
    this._auth.addAuthor(this.author)
  }


}
