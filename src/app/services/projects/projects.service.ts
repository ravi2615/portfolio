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
      description:[
        {
          list:"passport authentication",
        },
        {
          list:"real-time order updates using socket.io",
        },
        {
          list:"shopping cart feature",
        }
      ],
      sourceCode:"https://github.com/ravi2615/realtime_pizza",
      tools:[
        {
          skillName:"Bootstrap 4",
          image:"https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
        },
        {
          skillName:"Node js",
          image:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        },
        {
          skillName:"Mongodb",
          image:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        },
        {
          skillName:"Javascript",
          image:"https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        },
      ]
    },
    {
      name:"Audio App",
      image:"https://user-images.githubusercontent.com/67025166/120666207-438a7d80-c441-11eb-801e-489362601294.png",
      link:"https://audio-app-963b5.web.app/",
      description:[
        {
          list:"Audio Library",
        },
        {
          list:"create playlist and add to playlist",
        },
        {
          list:"using localstorage",
        },
      ],
      sourceCode:"https://github.com/ravi2615/audio-app",
      tools:[
        {
          skillName:"Angular 10",
          image:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
        },
        {
          skillName:"Angular Material",
          image:"https://material.angular.io/assets/img/angular-material-logo.svg"
        },
        {
          skillName:"Typescript",
          image:"https://cdn.worldvectorlogo.com/logos/typescript.svg"
        },
      ]
    },
    {
      name:"Blog Writing",
      image:"https://user-images.githubusercontent.com/67025166/120627402-7d935980-c418-11eb-93de-f2688124a5de.PNG",
      link:"https://blog-4213c.web.app/home",
      description:[
        {
          list:"firebase authentication",
        },
        {
          list:"firebase database (CRUD)",
        },
        {
          list:"email verification (firebase)",
        },
      ],
      sourceCode:"https://github.com/ravi2615/firebase_auth",
      tools:[
        {
          skillName:"Angular 10",
          image:"https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
        },
        {
          skillName:"Firebase",
          image:"https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
        },
        {
          skillName:"Typescript",
          image:"https://cdn.worldvectorlogo.com/logos/typescript.svg"
        },
      ]
    },
  ];

  getProject(){
    return this.projects;
  }
}
