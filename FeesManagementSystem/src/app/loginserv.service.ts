import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  logininfo:any;
  constructor() { }
  setData(logininfo: any)
  {
    this.logininfo=logininfo;
  }
  getData()
  {
    return this.logininfo;
  }
}

