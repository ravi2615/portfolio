import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  scrollTop=0;
  hideMainToolbar=false;
  toggle=false;
  constructor(public themeService: ThemeService, ) { }

  ngOnInit(): void {
  }

  onScroll(event){
    this.hideMainToolbar = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop; 
    
  }

  Navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
  switchTheme(){
    this.themeService.dark=!this.themeService.dark;
    localStorage.setItem("theme",this.themeService.dark?'dark':'light')
  }


}
