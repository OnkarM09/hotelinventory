import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm! : FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      guestEmail: ['', {validators : [Validators.required]}],
      checkinDate: [''],
      checkoutDate: [''],
      guestName : ['', {validators : [Validators.required , Validators.minLength(3)]}]
    },
    {
      updateOn : 'blur'
    });

    this.getBookingData();
    this.bookingForm.valueChanges.subscribe((data) =>{
      console.log(data)
    })

  }

  bookingRoom(){
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset();
  }

  getBookingData(){
    this.bookingForm.patchValue({
      guestEmail: 'test@example.com',
      checkinDate: '',
      checkoutDate:'',
      guestName : 'Test user'
    })
  }
  addNickName(){
    this.bookingForm.addControl('nickName', new FormControl(''))
  }
  removeNickName(){
    if(this.bookingForm.get('nickName')){
      this.bookingForm.removeControl('nickName')
    }
  }
}
