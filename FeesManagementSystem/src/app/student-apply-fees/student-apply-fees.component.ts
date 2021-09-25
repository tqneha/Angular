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
     stud_admission_info_arr.push(contactForm.value)

     
     localStorage.setItem('stud_admission_info',JSON.stringify(stud_admission_info_arr))
     this.r.navigate(['FeesHistory'])
    } 
    onsave(studentFormm:any){
      console.log(studentFormm.value)
      this.stud_admission_info=JSON.parse(localStorage.getItem('stud_admission_info')||'[]')
      localStorage.setItem('stud_admission_info',JSON.stringify(this.stud_admission_info))
    }
     currentUser:any={}
//  
    stud_admission_info:any={

    }
    
  
 
   constructor(private r:Router) {
    this.r.navigate(['FeesHistory']);
  
     this.currentUser=JSON.parse(localStorage.getItem('currentuser')||'{}');
     console.log(this.currentUser)
    }
    
  


   ngOnInit(): void {
   }

 }
