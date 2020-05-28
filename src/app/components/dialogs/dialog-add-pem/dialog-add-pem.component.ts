import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../dialog-add-thing/dialog-add-thing.component';

@Component({
  selector: 'app-dialog-add-pem',
  templateUrl: './dialog-add-pem.component.html',
  styleUrls: ['./dialog-add-pem.component.css'],
})
export class DialogAddPemComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddPemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
