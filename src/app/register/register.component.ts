import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string = "";
  email: string = "";
  mobileNo: string = "";
  password: string = "";
  confirmpassword: string = "";

  constructor() { }

  ngOnInit(): void { }

  register() {
    alert("Welcome");
    if (this.name == "" || this.name == null || this.name.trim() == "") {
      alert("Name cannot be null");
    }
    else if (this.password.length < 8) {
      alert("Password must be greater than 8 characters");
    }
    else if (this.password != this.confirmpassword) {
      alert("confirm Password must be equal to password");
    }
    else if (this.mobileNo.length != 10) {
      alert("MobileNumber is not valid");
    }
    else {
      const userobj = {
        "name": this.name,
        "email": this.email,
        "mobileNo": this.mobileNo,
        "password": this.password,
        "confirmpassword": this.confirmpassword
      };
      console.log(userobj);
      const url = "https://product-mock-api.herokuapp.com/medicalapp/api/v1/auth/register";
      axios.post(url, userobj).then(res => {
        let data = res.data;
        console.log(data);
        alert("successfully register");
        window.location.href = "/login";
      }).catch(err => {
        console.error("err");
        alert("error");
      });


    }

  }
}


