import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
   if(this.email ==""||this.email==null||this.email.trim()=="")
   {
     alert("Email cannot be null");
   }
  else if(this.password.length < 8 ||this.password.trim() == "")
  {
    alert("password must be greater than 8 characters");
  }
  else
 { 
         const userobj={
  
        "email":this.email,
        "password":this.password
       };
          console.log(userobj);
           const url="https://product-mock-api.herokuapp.com/medicalapp/api/v1/auth/login";
           
           axios.post(url,userobj).then(res=>
           {
               let data=res.data;
               localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
               console.log(data);
               alert("successfully logged in");
               window.location.href="index.html";
           }) .catch(err=>
           {
             console.error("err");
               alert("Incorrect Password");
           });
          
          
}

}
}
        