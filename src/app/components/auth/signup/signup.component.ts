import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup<any> | undefined;

  constructor(private authService:AuthService){}

  ngOnInit()
  {
    this.signupForm=new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]),
      confirmPassword:new FormControl('',[Validators.required,Validators.pattern(/^\d{12}$/)]),
      phone:new FormControl('',Validators.required)
    },this.passwordMatchValidator as Validators)
    
  }
  private passwordMatchValidator(fg:FormGroup)
  {
    const password= fg.get('password')?.value;
    const confirmPassword= fg.get('confirmPassword')?.value;
    if(password!=confirmPassword){
      fg.get('confirmPassword')?.setErrors({passwordMismatch:true});
    }
    else{
      fg.get('confirmPassword')?.setErrors(null);
    }
  }
  signup(){
    //console.log(this.signupForm);
    this.authService.signup(this.signupForm.value).subscribe((res)=>{
     // console.log(res);
    });
  }
}
