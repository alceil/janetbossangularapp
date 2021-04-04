import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  selectedFile: File;
  resultUrl:string;

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

  updateAuthor(){
    this.route.paramMap.subscribe(params=>{
      let id = params.get('id');
      console.log(id);
      console.log(this.author);
      this._http.post<any>(`https://janetlibraryappapi.herokuapp.com/authors/update/${id}`,this.author)
      .subscribe((data)=>{
        (console.log(data))
      })
    })
   
  }

  constructor(private route:ActivatedRoute,private _http:HttpClient) 
  {

   }

  ngOnInit(): void {
  }

}
