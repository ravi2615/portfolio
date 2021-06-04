import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }
  testimonial:any =[
    {
      name: "Suraj Kachhap",
      image: "",
      title: "Web Developer",
      description:""
    },
  ];

  getTestimonial(){
    return this.testimonial;
  }

}
