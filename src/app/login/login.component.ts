import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route : Router,
   private loginService : LoginService
    ){}

  email : string ="";
  password : string=""
  login(){
    const isLogin = this.loginService.login(this.email, this.password);
    if(isLogin){
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigateByUrl('/rooms/add');
    }
  }
}
