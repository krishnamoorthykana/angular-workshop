import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject('MY_TOKEN') private _param: any) { }
  somefun(){
    console.log("This is message from test service")
  }
}
