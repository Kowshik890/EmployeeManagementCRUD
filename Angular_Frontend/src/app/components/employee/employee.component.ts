import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeList: Employee[] | undefined;

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employeeList = response;
        console.log(this.employeeList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //public addEmployee()

}
