import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidateDirective,
      multi: true
    }
  ]
})
export class EmailvalidateDirective implements Validator{

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
       const value = control.value as string;
       if(value.includes('admin')){
          return {
            inValid : false
          }
       }
       return null;
  }
  constructor() { }

}
