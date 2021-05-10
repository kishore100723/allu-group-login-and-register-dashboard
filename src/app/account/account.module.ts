import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomFieldValidatorDirective } from './register/custom-field-validator.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, CustomFieldValidatorDirective],
  imports: [CommonModule,FormsModule  ]
})
export class AccountModule { }
