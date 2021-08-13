import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email : any;
  isLoggedIn = false;

  constructor() { 
    this.checkLogin();
  }

  ngOnInit(): void {
  }
 checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr):null;
    if(user != null){
      this.isLoggedIn = true;
    console.log("user", user.email);
    this.email = user.email;
    }

    }
    
   logout(){
            localStorage.removeItem("LOGGED_IN_USER");
            window.location.href="login.html";
    }



}
