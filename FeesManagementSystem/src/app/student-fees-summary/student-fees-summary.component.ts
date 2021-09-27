import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-fees-summary',
  templateUrl: './student-fees-summary.component.html',
  styleUrls: ['./student-fees-summary.component.css']
})
export class StudentFeesSummaryComponent implements OnInit {
//   model:any={};
//   model2:any={};
//   feesinfo: any[] = [];
//   student:any[]=[];
//    isApprove=true;
//    constructor() { }
 
//    ngOnInit() {
//      this.feesinfo=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
//    }
 
 
//    approval(i: number)
//    {
//         for(let j=0;j<this.feesinfo.length;j++)
//         {
//           if(j==i)
//           {
//               this.feesinfo[j].status="paid Fees";
//               localStorage.setItem("stud_admission_info",JSON.stringify(this.feesinfo));
//               this.feesinfo=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
//           }
//         }
//    }
 
//    notApproval(i: number)
//    {
 
//      for(let j=0;j<this.feesinfo.length;j++)
//      {
//        if(j==i)
//        {
//            this.feesinfo[j].status="Not Fees Paid";
//            localStorage.setItem("stud_admission_info",JSON.stringify(this.feesinfo));
//            this.feesinfo=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
//        }
//      }
 
//    }
 
//  }
 





 model:any={};
 model2:any={};
 myvalue:any;
 student:any[]=[];
 constructor() { }

 ngOnInit() {
   this.student=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
 }
 addstudent()
 {
   let student=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
   if(student==null)
   {
     student=[];
   }
   student.push(this.model);
   localStorage.setItem("stud_admission_info",JSON.stringify(student));
   this.student=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
   this.model={};
 }
 delete(i:any)
 {
    this.student.splice(i,1);
    localStorage.setItem("stud_admission_info",JSON.stringify(this.student));
 }


 edit(i:any)
{
  this.model2.name=this.student[i].name;
  this.model2.position=this.student[i].status;
  this.myvalue=i;
}
updateStudent()
{
  let k=this.myvalue;
  for(let i=0;i<this.student.length;i++)
  {
      if(i==k)
      {
          this.student[i]=this.model2;
          localStorage.setItem("stud_admission_info",JSON.stringify(this.student));
          this.student=JSON.parse(localStorage.getItem("stud_admission_info")||'[]');
          this.model2={}; 
      }
  }

}
}
 


