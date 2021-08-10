import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   cartItems= [
    {SNo: 1,ProductName:"Nivea", Price:120 },
    {SNo:"2",ProductName:"Vicks",Price:80},
    {SNo:"3",ProductName:"Dettol",Price:27},
    {SNo:"4",ProductName:"Volini",Price:87}
  ];
total:number=0;
gettotal()
{
  for(let cart of this.cartItems)
  {
    this.total = this.total + cart.Price;
  }
  return this.total;
}

}
