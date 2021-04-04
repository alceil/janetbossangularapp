import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user = 
  {
    username: '',
    email :'',
    password: '',
    phoneno: ''
}
  userVerify(){
    console.log("Successful login in front end")

  }

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  signUpUser(){
    console.log(this.user);
    this._auth.signUpUser(this.user)

  }

}
