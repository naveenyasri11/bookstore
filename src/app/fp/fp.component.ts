import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {
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
