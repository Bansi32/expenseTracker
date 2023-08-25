import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userLoggedIn:boolean;
  constructor(private authService:AuthService)
  {
  }
  ngOnInit()
  {
    this.authService.userLoggedIn$.subscribe(status => {
      this.userLoggedIn = status;
      // console.log(this.userLoggedIn);
    });
  }  
}
