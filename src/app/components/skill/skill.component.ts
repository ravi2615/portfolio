import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skill={};
  constructor( private skillService:SkillService, public themeService:ThemeService) { }

  ngOnInit(): void {
    this.skill = this.skillService.getSkill();
    // console.log(this.skill[0]['Frontend'])
  }

}
