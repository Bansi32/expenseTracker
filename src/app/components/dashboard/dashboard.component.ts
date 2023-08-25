import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message:string="";
  userLoggedIn:boolean;
  constructor(private authService:AuthService,private categoryService:CategoriesService)
  {}


  ngOnInit()
  {
    this.authService.userLoggedIn$.subscribe(status => {
      this.userLoggedIn = status;
    });
    this.getCategories();
    this.getCategoryById();
    
  }
  getCategories()
  {
    this.categoryService.getCategories().pipe(
      catchError((err)=>{
        //console.log(err);
        return throwError("Something went wrong. Please try again later.")
      })
    ).subscribe((res)=>{
      //console.log(res);
      this.message=res;
    },(err)=>{
      return this.message="Not Authorized!";
      //console.log(err);
    });
  }
  getCategoryById()
  {
    this.categoryService.getCategoriesById(1).pipe(
      catchError((err)=>{
        //console.log(err);
        return throwError("Something went wrong. Please try again later.")
      })
    ).subscribe((res)=>{
     // console.log(res);
      this.message=res;
    },(err)=>{
      return this.message="Not Authorized!";
      //console.log(err);
    });
  }

}
