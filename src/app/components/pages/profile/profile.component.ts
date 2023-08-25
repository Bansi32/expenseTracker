import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userLoggedIn:boolean;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.authService.userLoggedIn$.subscribe(status => {
      this.userLoggedIn = status;
    });
    this.authService.isLoggedIn();
  }

}
