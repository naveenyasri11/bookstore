import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Product: any;
  name:any="";
  description:any="";
  price:any="";
  image:any="";
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }


  constructor(

    private router: Router
  ) { }

  ngOnInit():void {
    const productName = this.router.url.split('/').pop();

  }
  myimage1:string="assets/images/blue lock.jpg";
  myimage2:string="assets/images/chainsawman.jpg";
  myimage3:string="assets/images/killing stalking.jpg";
  myimage4:string="assets/images/hayao miyazaki.jpg";
  myimage5:string="assets/images/dan dadan.jpg";
  myimage6:string="assets/images/ce 1.jpg";
  myimage7:string="assets/images/ce 2.jpg";
  myimage8:string="assets/images/magazine 2.jpg";
  myimage9:string="assets/images/magazine 6.jpg";
  myimage10:string="assets/images/novel 2.jpg";
  myimage11:string="assets/images/ce 3.jpg";
  myimage12:string="assets/images/novel 5.jpg";
  myimage13:string="assets/images/novel 4.jpg";
  myimage14:string="assets/images/novel 3.jpg";
  myimage15:string="assets/images/magazine 3.jpg";
  myimage16:string="assets/images/magazine 1.jpg";
  myimage17:string="assets/images/pendidikan.jpg";
  myimage18:string="assets/images/magazine 5.jpg";



  buyNow() {
    this.router.navigateByUrl('/checkout');
  }

  addToCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const cartItem = {
      name: this.Product.name,
      price: this.Product.price
    };
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}
