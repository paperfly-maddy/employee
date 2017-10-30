import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service'
import { Employee } from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
   // public empService:EmpService
    public empService:EmpService,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  show: boolean = false;
  
  clicked() {

      //alert("test");
console.log('clicked');
      this.show = !this.show;
      //alert("test");
  }

  ngOnInit() {
    this.getEmployees();
  }
  model = new Employee();
  addEmployee(){
    console.log('here');
    this.empService.addEmployee(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
     console.log('ther');
     this.getEmployees();
     this.model = new Employee();
     this.show = !this.show;
    this.router.navigate(['/home'])
  }
  employees:Employee;
  getEmployees(){
    this.empService.getEmployees()
        .subscribe(employees=>{
          this.employees = employees;
        })
  }
  deleteEmployee(id){
    this.empService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployees();
      });
  }
}
