import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    this.func();
  }

  ngOnInit(): void {
  }
 func()
 {
  const url = "assets/indexproducts.json";
  console.log("url", url);
  axios.get(url).then((res) => {
    let products = res.data;
    console.table(products);
  
  }).catch((err) => {
    console.log("err", err);
  })
 }
}
