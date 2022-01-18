import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //writtten by me
    private _http: HttpClient

  ) { }

  //get all user observable
  getAllUser(): Observable<any> {
    return this._http.get("http://localhost:4000/user")
  }
}
