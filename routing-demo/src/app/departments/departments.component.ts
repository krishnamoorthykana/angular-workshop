import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  constructor(private router:Router){}
  departments = [
    { "id":1, "name":"Computer Science" },
    { "id":2, "name":"Information Science" },
    { "id":3, "name":"AIML" },
    { "id":4, "name":"IoT" },
  ]

  onDeptSelect(dept:any){
    this.router.navigate(['/departments', dept.id])
  }
}
