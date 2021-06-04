import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public themeService: ThemeService) { }
  
  ngOnInit(): void {
  }

}
