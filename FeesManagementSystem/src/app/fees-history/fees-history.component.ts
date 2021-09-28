import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees-history',
  templateUrl: './fees-history.component.html',
  styleUrls: ['./fees-history.component.css']
})
export class FeesHistoryComponent  {
   current_user:any='';
   AsmissionInfo:any=[];
  constructor(private r:Router) { 

   this.current_user=  JSON.parse(localStorage.getItem('currentuser')||'{}');
   this.AsmissionInfo=this.getData();
   console.log(this.AsmissionInfo)
  //  this.AsmissionInfo= this.AsmissionInfo.filter((obj: any)=>{
  //    obj.username==this.current_user.username
  //   })
    //  if(this.AsmissionInfo){
      
      //    console.log(this.AsmissionInfo)
      //  }
      // this.r.navigate(['feeshistory']);
      
    }
   async getData(){
     let AsmissionInfo= await JSON.parse(localStorage.getItem('stud_admission_info')||'[]');
return AsmissionInfo
    }
    
}
