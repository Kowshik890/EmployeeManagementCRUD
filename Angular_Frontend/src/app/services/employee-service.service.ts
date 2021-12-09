import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private apiServiceURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceURL}/employee/find/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServiceURL}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServiceURL}/employee/update`, employee);
  }

  public deleteOneEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceURL}/employee/delete/${employeeId}`);
  }
} 
