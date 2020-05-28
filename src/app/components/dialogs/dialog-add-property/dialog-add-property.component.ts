import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogAddThingComponent } from '../dialog-add-thing/dialog-add-thing.component';
import { PropertyType } from '../../classes';
import { DialogData } from '../dialog-add-thing/dialog-add-thing.component';

@Component({
  selector: 'app-dialog-add-property',
  templateUrl: './dialog-add-property.component.html',
  styleUrls: ['./dialog-add-property.component.css'],
})
export class DialogAddPropertyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogAddThingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  GetPropertyType(): string[] {
    const res: string[] = [];
    for (let type in PropertyType) {
      if (type) {
        res.push(type);
      }
    }
    return res;
  }

  ngOnInit(): void {}
}
