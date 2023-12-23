import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { loginGuard } from './gaurds/login.guard';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path: 'getemployees', component: EmployeeComponent, canActivate: [loginGuard]
  },
  {
    path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule), canActivate: [loginGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
