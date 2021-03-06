import { ThemeService } from './../../services/theme/theme.service';
import { SocialService } from './../../services/social/social.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  social={};
  constructor( private socialService: SocialService, public themeService:ThemeService) { }

  ngOnInit(): void {
    this.social=this.socialService.getSocial()
    // console.log(this.social);
    
  }

}
