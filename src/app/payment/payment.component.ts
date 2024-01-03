import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    holdername: string = '';
    username: string = '';
    address: string = '';
    cardNumber: string = '';
    amt: string = '';
    
  
    processPayment() {
      // Implement your payment processing logic here
      console.log('Payment processed!');
    }
  
 
  showLogin:boolean=true
  authError:string="";
  constructor() {}


  signUp:any;
  openLogin:any;
  
  login:any;
  openSignUp:any
  ngOnInit() {
  }

}
