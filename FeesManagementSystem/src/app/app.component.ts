import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeesManagementSystem';
  currentuser=''
  constructor(){
   this.currentuser= JSON.parse(localStorage.getItem("currentuser")||'{}');
  }
}