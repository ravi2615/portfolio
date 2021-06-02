import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpreinceService {

  constructor() { }

  experience=[
    {
      companyName: "Milo Doctor-Yumedic",
      image: "../../../assets/milodoctor_logo.7c7e4e58.png",
      link: "https://yumedic.com/"
    }
  ];
  
  getExpreince(){
    return this.experience;
  }
}
