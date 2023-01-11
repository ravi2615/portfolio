import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpreinceService {

  constructor() { }

  experience=[
    {
      companyName: "Xiaomi India Private Limited",
      image: "../../../assets/Mi_logo.png",
      link: "https://www.mi.com/global/about"
    },
    {
      companyName: "Samsung Electronics",
      image: "../../../assets/Samsung_logo.png",
      link: "https://research.samsung.com/sri-n"
    },
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
