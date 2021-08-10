import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string="";
  password:string="";
 login()
 {
   if(this.email=="")
   {
     alert("Email cannot be null");
   }
  // else if(this.password.length < 8)
  // {
  //   alert("password must be greater than 8 characters");
  // }
  else
  {
    alert("Login sucessfull");
  }
}
}
