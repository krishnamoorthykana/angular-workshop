import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-form-one';
  constructor(){}
  onSubmit(userForm:any){
    console.log(userForm)
    console.log(userForm.value)
  }
  @ViewChild('userForm') f!: NgForm;
  onFormSubmit(){
    console.log("@viewChild way ")
    console.log(this.f.value)
  }
}
