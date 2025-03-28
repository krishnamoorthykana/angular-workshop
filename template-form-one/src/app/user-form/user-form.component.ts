import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
   user = new User("test user","test@test.com")
  onSubmit(userForm:any){
    console.log("Two way binding in form example")
    console.log(userForm)
    console.log(userForm.value)
    console.log(this.user.name)
    console.log(this.user.email)
  }
}
