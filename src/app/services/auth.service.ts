import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const BASE_URL=['http://localhost:8084/'];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedInSubject = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }
  
  signup(signupRequest:any):Observable<any>
  {
    return this.http.post(BASE_URL+"register",signupRequest);
  }
  login(loginRequest:any):Observable<any>
  { 
    this.userLoggedInSubject.next(true);
    return this.http.post(BASE_URL+"authentication",loginRequest);
  }
 
  isLoggedIn()
  {
    const jwtToken=localStorage.getItem('JWT');
    if(jwtToken)
    {
      this.userLoggedInSubject.next(true);
    }
  }
  
}
