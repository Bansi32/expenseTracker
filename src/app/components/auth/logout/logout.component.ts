import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  ngOnInit()
  {
    const jwtToken=localStorage.getItem("JWT");
    if(jwtToken)
    {
        localStorage.removeItem("JWT");
    }
  }
}