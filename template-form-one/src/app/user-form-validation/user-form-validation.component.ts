import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrl: './user-form-validation.component.css'
})
export class UserFormValidationComponent {
  onSubmit(userForm:any){
    console.log("form validation example")
    console.log(userForm)
    console.log(userForm.value)
    console.log(userForm.value.name)
  }
}
