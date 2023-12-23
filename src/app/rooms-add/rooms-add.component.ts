import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  person ={
    name: 'Onkar',
    age: 23
  }
  showName : string = '';

  firstName: string = '';
  lastname: string = '';
  successMsg : string = '';
  submitForm(f: NgForm){
    console.log(f)
    this.successMsg = 'Form submitted successfully'
    f.resetForm();
  }
}
