import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'image-show-dialog',
  templateUrl: './image-show-dialog.component.html',
  styleUrls: ['./image-show-dialog.component.scss']
})
export class ImageShowDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImageShowDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
