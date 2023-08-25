import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit{
  constructor(private authService:AuthService){}
  ngOnInit():void{
    this.authService.isLoggedIn();
  }

}
