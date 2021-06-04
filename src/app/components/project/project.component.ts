import { DialogComponent } from './dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = {};
  isHover=false;
  constructor( private projectService:ProjectsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProject();
  }

  openDialog(project){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = project;
    // dialogConfig.width = 'auto';
    // dialogConfig.height= '95%';
    this.dialog.open(DialogComponent, dialogConfig);
  }
}
