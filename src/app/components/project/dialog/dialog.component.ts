import { ThemeService } from './../../../services/theme/theme.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)  public data: any, private dialogRef: MatDialogRef<any>, public themeService: ThemeService ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
    console.log("abjhagsugu");
    
  }

}
