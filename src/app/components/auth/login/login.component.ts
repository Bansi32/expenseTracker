import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup<any> | undefined;
  constructor(private authService:AuthService,private router:Router) {
  }
  ngOnInit()
  {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  login()
  {
    //console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      if(res.jwt)
      {
        alert("Welcome!");
        const jwtToken=res.jwt;
        localStorage.setItem('JWT',jwtToken);
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert("Please enter valid details!");
      }
    });
  }

}
