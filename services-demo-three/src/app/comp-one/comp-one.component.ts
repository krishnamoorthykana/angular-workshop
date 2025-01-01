import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css'
})
export class CompOneComponent {
public users:any = []
constructor(private userService:UserService){}
ngOnInit(){
  this.users = this.userService.getUsers()
}
}
