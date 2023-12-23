import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChildFn } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from '../rooms-add/rooms-add.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { roomsGuard } from './rooms.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild : [roomsGuard],
    children: [
      {
        path: 'add', component: RoomsAddComponent
      },
      {
        path: ':roomid', component: RoomBookingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
