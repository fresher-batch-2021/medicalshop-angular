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


console.log(window.location.search.substr(1));
const params = new URLSearchParams(window.location.search.substr(1));
let pro = params.get("productName");
let price = params.get("price");
console.log("product", pro);
console.log("price", price);

var productList =  [{ proName : pro ,proPrice : price }];
console.log("productList", productList);

let itemList = "";
let total=0;
for( let list of productList)
{
  console.log("productname", list.proName);
  console.log("proprice", list.proPrice);
  let quantitybutton=` <input type="number" name="quantity"  id="quantityv" value=4 min="1"  required>`
  console.log("#quantity");
  let deletebutton=`<a href="cart.html" onClick="deleteitem()" ><img src="images/delete.png" alt="show image"></a>`
 
  itemList =
  itemList +
  "<tr><td>" +list.proName + "</td><td>" + list.proPrice +"</td><td>" + quantitybutton +"</td>";
}
// document.querySelector("#cart-table").innerHTML = itemList;
localStorage.setItem("productList",JSON.stringify(productList));

