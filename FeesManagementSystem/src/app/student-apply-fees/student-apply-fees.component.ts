import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-student-apply-fees',
  templateUrl: './student-apply-fees.component.html',
  styleUrls: ['./student-apply-fees.component.css']
})
export class StudentApplyFeesComponent implements OnInit {
  model:any={};
  contactForm: any;
 
  onSubmit(contactForm:any) {
     console.log("i am invoked ")
     console.log(contactForm.value);
     var stud_admission_info_arr=JSON.parse(localStorage.getItem('stud_admission_info')||'[]');
     stud_admission_info_arr.push({username:this.currentUser.username,userPassword:this.currentUser.userPassword
      ,...contactForm.value})

     
     localStorage.setItem('stud_admission_info',JSON.stringify(stud_admission_info_arr))
     this.r.navigate(['feeshistory'])
    } 
   
     currentUser:any={}
//  
    stud_admission_info:any={

    }
    
  
 
   constructor(private r:Router) {
    // this.r.navigate(['feeshistory']);
  
    
     this.currentUser=JSON.parse(localStorage.getItem('currentuser')||'{}');
     console.log(this.currentUser)
    }
    
  


   ngOnInit(): void {
   }

 }
