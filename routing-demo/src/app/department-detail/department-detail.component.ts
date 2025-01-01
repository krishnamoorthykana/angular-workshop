import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrl: './department-detail.component.css'
})
export class DepartmentDetailComponent {
  public id:any
  constructor( private route:ActivatedRoute){}
  ngOnInit(){
     this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    let newId = this.route.snapshot.params['id']
    console.log(newId)
  }

}
