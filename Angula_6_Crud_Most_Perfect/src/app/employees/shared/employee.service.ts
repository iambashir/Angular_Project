import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/Model/employee.model';
import { tap } from 'rxjs/operators';

// Bashir Hossain

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class EmployeeService {

  // dataUrl = 'http://localhost:8084/project41/api/v1/category';     
 // dataUrl = 'http://localhost:8084/project41/api/v1/category';
 // dataUrl = 'http://localhost:8084/assets/db.json';
 dataUrl = 'http://localhost:3000/employees';


  currentEmployee: Employee = {
    catid: '',
    catname: '',
    description: '',
  }

  constructor(
    private http: HttpClient
  ) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllCatName(): Observable<String[]> {
    return this.http.get<String[]>(this.dataUrl + '/', headerOption);
  }
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl, headerOption);
  }

  deleteEmployee(catid: string): Observable<Employee> {
    return this.http.delete<Employee>(this.dataUrl + '/' + catid, headerOption);
  }

  createEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.dataUrl, emp, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
    
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.dataUrl + '/' + emp.catid, emp, headerOption).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

}
