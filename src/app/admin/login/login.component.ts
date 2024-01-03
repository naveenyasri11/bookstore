import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string='';
    password: string = '';
    response:any;
    error:any;
    constructor(private authService: AuthService) {}
  
    login() {
     
      this.authService.login(this.username, this.password)
        .subscribe(response => {
          
          console.log('Login successful!');
        }, error => {
          console.error('Login failed:', error);
        });
    }
 

  ngOnInit() {
  }

}
