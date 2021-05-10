import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomFieldValidator]',
  providers: [ { provide:NG_VALIDATORS, useClass: CustomFieldValidatorDirective, multi:true },],
})
export class CustomFieldValidatorDirective implements Validator{

  constructor() { }
  
  validate(form: FormGroup): ValidationErrors {
    if(!form.controls.password || !form.controls.confrimPassword)
    {
      return null;
    }
    if(!form.controls.password.errors && form.controls.confrimPassword.errors)
    {
      return null;
    }

    if(form.controls.password.value !== form.controls.confrimPassword.value)
    {
      return { 'compareFieldValidator': true};
    }

    if(form.controls.password.hasError('compareFieldValidator'))
    {
      delete form.controls.password.errors['compareFieldValidator'];
    }

    if(form.controls.confrimPassword.hasError('compareFieldValidator'))
    {
      delete form.controls.confrimPassword.errors['compareFieldValidator'];
    }
return null;  }
 

}
