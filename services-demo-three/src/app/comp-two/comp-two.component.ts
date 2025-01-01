import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css'
})
export class CompTwoComponent {
public users:any = []
constructor(private userService:UserService){}
ngOnInit(){
  this.users = this.userService.getUsers()
}
}
