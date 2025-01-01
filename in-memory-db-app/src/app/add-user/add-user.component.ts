import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  users: any[] = [];
  newUser = { name: '', email: '' };
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data)
    });
  }
  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.userService.addUser(this.newUser).subscribe((user) => {
        this.users.push(user); // Update the UI with the new user
        console.log(this.users)
        this.newUser = { name: '', email: '' }; // Reset the form
      });
    }
  }
}
