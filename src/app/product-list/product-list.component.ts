
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  books:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/db.json').subscribe(data => {
      this.products = data.products;
    });
  }
  myimage1:string="assets/images/blue lock.jpg";
  myimage2:string="assets/images/chainsawman.jpg";
  myimage3:string="assets/images/killing stalking.jpg";
  myimage4:string="assets/images/hayao miyazaki.jpg";
  myimage5:string="assets/images/dan dadan.jpg";
  myimage6:string="assets/images/ce 1.jpg";
  myimage7:string="assets/images/ce 2.jpg";
}
