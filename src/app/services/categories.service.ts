import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


const BASE_URL=['http://localhost:8084/'];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor(private http: HttpClient,private authService:AuthService) { }
  getCategories():Observable<any>{
    return this.http.get(BASE_URL+"api/categories",{
      headers:this.createAuthorizationHeader()
    });
  }
  getCategoriesById(id:number):Observable<any>{    
    return this.http.get(BASE_URL+"api/categories/"+id,{
      headers:this.createAuthorizationHeader()
    });
  }
  private createAuthorizationHeader(){
    const jwtToken=localStorage.getItem("JWT");
    if(jwtToken)
    { 
      this.authService.isLoggedIn();
      return new HttpHeaders().set(
        'Authorization','Bearer '+jwtToken
      )
    }
    else{
      console.log("JWT token not found!");
    }
    return null;
  }
}
