import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees-history',
  templateUrl: './fees-history.component.html',
  styleUrls: ['./fees-history.component.css']
})
export class FeesHistoryComponent implements OnInit {

  constructor(private r:Router) { 

    //  localStorage.setItem('FeesHistory',JSON.stringify('{}'))
    // this.r.navigate(['feeshistory']);
  
  
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
