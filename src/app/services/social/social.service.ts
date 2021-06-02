import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  social:any =[
    {
      name: "linkedin",
      image: "https://img.icons8.com/color/30/000000/linkedin-circled--v1.png",
      link: "https://www.linkedin.com/in/ravi-shankar-1a008a194"
    },
    {
      name: "facebook",
      image: "https://img.icons8.com/color/60/000000/facebook-new.png",
      link: "https://www.facebook.com/profile.php?id=100007153277611"
    },
    {
      name: "instagram",
      image: "https://img.icons8.com/color/30/000000/instagram-new--v1.png",
      link: "https://www.instagram.com/invites/contact/?i=1iu4ea0a5zmsj&utm_content=ko8rccv"
    }
  ];

  getSocial(){
    return this.social;
  }

}
