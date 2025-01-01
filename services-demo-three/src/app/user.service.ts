import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(){
    const userList = [
      {"id":1, name:"User 1"},
      {"id":2, name:"User 2"},
      {"id":3, name:"User 3"},
      {"id":4, name:"User 4"},
      {"id":5, name:"User 5"},
    ]
    return userList
  }
}
