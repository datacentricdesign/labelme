import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Thing } from '../../classes';

@Component({
  selector: 'app-dialog-add-thing',
  templateUrl: './dialog-add-thing.component.html',
  styleUrls: ['./dialog-add-thing.component.css'],
})
export class DialogAddThingComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddThingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

export interface DialogData {
  name: string;
  type: string;
  description: string;
  thing: Thing;
  jwt: string;
  pem: string;
}
