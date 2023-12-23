import { inject } from '@angular/core';
import { LoginService } from './../login/login.service';
import { CanActivateChildFn } from '@angular/router';

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  alert(loginService.isAdmin);
  return loginService.isAdmin;
};
