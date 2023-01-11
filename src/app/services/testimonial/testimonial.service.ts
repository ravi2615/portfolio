import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }
  testimonial:any =[
    {
      active: true,
      name: "Mohammed Mateen",
      image: "",
      title: "Software Engineer (Xiaomi India Private Limited)",
      description:"Ravi is quite enthusiastic and a passionate coder. He has the ability to do the task in most efficient way. It was a great experience to work with him and you can trust him with a overall project."
    },
    {
      active:false,
      name: "Roshan Kumar Rajak",
      image: "../../../assets/roshan.jpg",
      title: "AVP Marketing(Milo Doctor)",
      description:"Ravi is quite enthusiastic and a passionate coder. He has the ability to do the task in most efficient way. It was a great experience to work with him and you can trust him with a overall project."
    },
    {
      active: false,
      name: "Suraj Kachhap",
      image: "",
      title: "Web Developer",
      description:"Ravi is quite enthusiastic and a passionate coder. He has the ability to do the task in most efficient way. It was a great experience to work with him and you can trust him with a overall project."
    },

  ];

  getTestimonial(){
    return this.testimonial;
  }

}
