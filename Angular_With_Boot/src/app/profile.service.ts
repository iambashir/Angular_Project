import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //url: String = 'http://localhost:8082/profile';
  url: String = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  public getAllProfiles(): Observable<Profile[]> {
    //return this.http.get<Profile[]>(this.url + '/getAll');
    return this.http.get<Profile[]>(this.url + "/profile");
  }

  public saveUserProfile(profile: Profile): Observable<Profile> {
    //return this.http.post<Profile>(this.url + '/save', profile);
    return this.http.post<Profile>(this.url + '/profile', profile);
  }

  public deleteprofile(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/profile/' + id);
    //return this.http.delete<any>(this.url + '/delete/' + id);
  }

  public saveImage(file: File, userCode: String): Observable<any> {
    const formData = new FormData();

    formData.append('file', file);
    return this.http.post<any>(this.url + "/upload-image/" + userCode, formData);
  }
}
