import { SocialService } from './../../services/social/social.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear;
  social={};
  constructor( private socialService: SocialService) { }

  ngOnInit(): void {
    this.currentYear=Date.now();
    this.social=this.socialService.getSocial()
  }

}
