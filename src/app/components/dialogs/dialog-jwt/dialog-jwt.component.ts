import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAddThingComponent } from '../dialog-add-thing/dialog-add-thing.component';
import { DialogData } from '../dialog-add-thing/dialog-add-thing.component';

@Component({
  selector: 'app-dialog-jwt',
  templateUrl: './dialog-jwt.component.html',
  styleUrls: ['./dialog-jwt.component.css'],
})
export class DialogJWTComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddThingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
