import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message:string="";
  constructor(private authService:AuthService)
  {}
  ngOnInit()
  {
    this.hello();
  }
  hello()
  {
    this.authService.hello().pipe(
      catchError((err)=>{
        //console.log(err);
        return throwError("Something went wrong. Please try again later.")
      })
    ).subscribe((res)=>{
      //console.log(res);
      this.message=res.message;
    },(err)=>{
      return this.message="Not Authorized!";
      //console.log(err);
    });
  }
}
