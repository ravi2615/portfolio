import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = {};
  isHover=false;
  constructor( private projectService:ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProject();
  }
}
