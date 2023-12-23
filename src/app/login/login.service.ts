import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoginAccess : boolean = false;
  isAdmin : boolean = false;
  constructor() { }
  login(email : string, password : string){
    if(email == 'admin@gmail.com' && password == 'admin'){
      this.isLoginAccess = true;
      this.isAdmin = true;
    }else if(email == 'user@gmail.com' && password == 'user'){
      this.isLoginAccess = true;
      this.isAdmin = false;
    }
    return this.isLoginAccess;
  }
}
