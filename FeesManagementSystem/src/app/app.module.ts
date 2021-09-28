import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { HomeComponent } from './home/home.component';
 import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentApplyFeesComponent } from './student-apply-fees/student-apply-fees.component';
import { StudentFeesSummaryComponent } from './student-fees-summary/student-fees-summary.component';
import { SignoutComponent } from './signout/signout.component';
import { FeesHistoryComponent } from './fees-history/fees-history.component';


const appRoutes:Routes=[
  {path:"",redirectTo:'/login',pathMatch:'full'},
  {path:"home",component:HomeComponent},
   {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"applyfees",component:StudentApplyFeesComponent},
  {path:"Summary",component:StudentFeesSummaryComponent},
  {path:"signout",component:SignoutComponent},
  {path:"feeshistory",component:FeesHistoryComponent},
  {path:'history',component:FeesHistoryComponent}

 
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    SignupComponent,
     LoginComponent,
     StudentApplyFeesComponent,
     StudentFeesSummaryComponent,
     SignoutComponent,
     FeesHistoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialModule,
    RouterModule.forRoot(appRoutes),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
