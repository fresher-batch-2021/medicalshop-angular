import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="";
  street:string="";
  city:string="";
  state:string="";
  pincode:string="";
  paymentProcess()
  {
      if(this.name == "" || this.name == null || this.name.trim() =="")
      {
        alert("Name cannot be null");
      }
      else if (this.street=="" || this.street==null || this.street.trim()=="")
      {
             alert("Provide address Details");
      }
      else if (this.city=="" || this.city==null || this.city.trim()=="")
      {
             alert("city Name cannot be null");
      }
      else if (this.state=="" || this.state==null || this.state.trim()=="")
      {
             alert("State Name cannot be null");
      }

      else if(this.pincode.length !=6)
      {
            alert("Pincode is not valid");
      }
      else
      {
        const addressobj={

          "name":this.name,
          "street":this.street,
          "city":this.city,
          "state":this.state,
          "pincode": this.pincode
         };
       
    //  localStorage.setItem("paymentaddress",JSON.stringify(addressobj));
      alert("Order placed");
      window.location.href="/order";  
    }   
      
  }
 
}
