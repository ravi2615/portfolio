import { ExpreinceService } from './../../services/expereince/expreince.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor( private expreinceService: ExpreinceService) { }
  experience={};
  ngOnInit(): void {
    this.experience= this.expreinceService.getExpreince();
  }

}
