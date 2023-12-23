import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {
  id : number = 0;
  constructor( private router: ActivatedRoute){
    
  }

  ngOnInit(): void {
      this.router.params.subscribe((params)=>{    //activiated route params is an obserable
        console.log(params['roomid']);
        this.id= params['roomid'];
      })
  }  
}
