import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../login-model';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide=true;
  user:LoginModel=new LoginModel();
  loginform:FormGroup=new FormGroup({
    password:new FormControl(""),
    email:new FormControl("joshi.neha2013@gmail.com")

  })

  model:any={};
  e: any[] = [];
  flag=false;
flag1=false;

  adminLogin={email:'admin@gmail.com',password:'admin123'}
  m: any;

  constructor(private formBuilder:FormBuilder,private r:Router) {
    
   }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group(
    {
      'email':[this.user.email,[Validators.required,Validators.email]],
      'password':[this.user.password,[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
    }
    );
  }
  signupdata()
  {
    this.r.navigate(['signup']);
  }

  onLoginSubmit()
  {
    
    console.log("hii")
    this.e=JSON.parse(localStorage.getItem("empData")||'[]');
    this.model=this.loginform.value;
    let myData:any={};

     for(let i=0;i<this.e.length;i++)
     {
      if(this.model.email==this.e[i].Email && this.model.password==this.e[i].userPassword)
      {
         this.flag=true;
        
         localStorage.setItem('currentuser',JSON.stringify(this.e[i]))
      }
      else if(this.model.email==this.adminLogin.email && this.model.password==this.adminLogin.password)
      {
        this.flag1=true;
      }
    }
    if(this.flag==true)
    {
      this.r.navigate(['applyfees']);
    }
    else if(this.flag1==true)
    {
      this.r.navigate(['summary']);
    }
    else
    {
      alert('user is not register');
      this.loginform.reset();
    }

 }


}
   