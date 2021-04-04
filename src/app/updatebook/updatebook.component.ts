import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {


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
  constructor(private route:ActivatedRoute,private _http:HttpClient) { }

  ngOnInit(): void {
  }


  updateBook(){
    this.route.paramMap.subscribe(params=>{
      let id = params.get('id');
      console.log(id);
      console.log(this.book);
      this._http.post<any>(`https://janetlibraryappapi.herokuapp.com/books/update/${id}`,this.book)
      .subscribe((data)=>{
        (console.log(data))
      })
    })
   
  }

}
