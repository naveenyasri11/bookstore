import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    passwordMismatchError = false;
    username: string='';
    password: string = '';
    response:any;
    error:any;
    confirmPassword:any;
  
    constructor(private authService: AuthService) {}
  
    signup() {
        if (this.password !== this.confirmPassword) {
            this.passwordMismatchError = true;
            return; 
          }
    
      this.authService.signup(this.username, this.password)
        .subscribe(response => {
          
          console.log('Signup successful!');
        }, error => {
          console.error('Signup failed:', error);
        });
    }
  }