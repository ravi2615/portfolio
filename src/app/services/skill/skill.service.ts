import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  
  skill=[
      {
        "Frontend":[
          {
            skillName:"Html 5",
            image:"https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
          },
          {
            skillName:"CSS 3",
            image:"https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"
          },
          {
            skillName:"Bootstrap 4",
            image:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
          },
          {
            skillName:"Angular 10",
            image:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
          },
          {
            skillName:"Angular Material",
            image:"https://material.angular.io/assets/img/angular-material-logo.svg"
          }
        ],
      },
      {
        "Backend":[
          {
            skillName:"Node js",
            image:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
          },
          {
            skillName:"Firebase",
            image:"https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
          },
          {
            skillName:"Bootstrap 4",
            image:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
          },
          {
            skillName:"Mongodb",
            image:"https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
          },
          {
            skillName:"Typescript",
            image:"https://cdn.worldvectorlogo.com/logos/typescript.svg"
          }
        ],
      },
      {
        "Programming":[
          {
            skillName:"CPP",
            image:"https://isocpp.org/assets/images/cpp_logo.png"
          },
          {
            skillName:"Python",
            image:"https://cdn.worldvectorlogo.com/logos/python-5.svg"
          }
        ],
      }
  ];

  getSkill(){
    return this.skill;
  }
}
