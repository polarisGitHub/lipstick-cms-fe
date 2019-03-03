import {Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {FileHolder} from '../../data/file-holder';
import {ImageUploadService} from '../../service/image-upload.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ImageShowDialogComponent} from '../image-show-dialog/image-show-dialog.component';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnChanges {

  @Input() title;
  @Input() imageShowHeightPx = 120;
  @Input() imageShowWidthPx = 120;
  @Input() max = 100;
  @Input() url: string;
  @Input() files: string[];
  @Input('extensions') supportedExtensions: string[];


  constructor(private imageService: ImageUploadService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  showImage(image: string) {
    this.dialog.open(ImageShowDialogComponent, {
      data: {image: image}
    });
  }

  deleteImage(index: number) {
    this.files.splice(index, 1);
  }
}
