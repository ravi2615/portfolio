import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects=[
    {
      name:"Pizza Food Point",
      image:"https://user-images.githubusercontent.com/67025166/120517787-a9193400-c385-11eb-8b43-3554c6dee08e.PNG",
      link:"",
      linkActive:false,
    },
    {
      name:"Audio App",
      image:"https://user-images.githubusercontent.com/67025166/120627170-402ecc00-c418-11eb-996a-4bceb030b583.png",
      link:"https://audio-app-963b5.web.app/",
      linkActive:false,
    },
    {
      name:"Blog Writing",
      image:"https://user-images.githubusercontent.com/67025166/120627402-7d935980-c418-11eb-93de-f2688124a5de.PNG",
      link:"https://blog-4213c.web.app/home",
      linkActive:false,
    },
  ];

  getProject(){
    return this.projects;
  }
}
