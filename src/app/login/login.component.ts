import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login=
  {
    email:'',
    password:''
  }



  constructor(private _http:HttpClient,private _router: Router) { }




  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.login);

    this._http.post<any>("https://janetlibraryappapi.herokuapp.com/login/loguser",this.login)
    .subscribe((data)=>{
     if(data['msg']=='correct password')
     {
      this._router.navigateByUrl('/books')
     }
    })

  }

}
