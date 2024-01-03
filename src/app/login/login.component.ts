
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validator, Validators}from '@angular/forms';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';
import {LoggerService} from '../logger.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    showLogin:boolean=true
    authError:string="";
    constructor(private logger:LoggerService) {}
  
  
    signUp:any;
    openLogin:any;
    
    login:any;
    openSignUp:any
    ngOnInit() {
        this.logger.log("login component");
    }





myimage21:string="assets/images/login background.jpg";
}