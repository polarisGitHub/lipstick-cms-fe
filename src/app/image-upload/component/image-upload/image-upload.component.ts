import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ImageShowDialogComponent} from '../image-show-dialog/image-show-dialog.component';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnChanges {

  @Input() multiple = false;
  @Input() title;
  @Input() imageShowHeightPx = 120;
  @Input() imageShowWidthPx = 120;
  @Input() max = 100;
  @Input() prefix: string;
  @Input() files: string[];
  @Input('extensions') supportedExtensions: string[];

  @Output() uploadFiles: EventEmitter<FileList> = new EventEmitter<FileList>();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  showImage(image: string) {
    this.dialog.open(ImageShowDialogComponent, {
      data: {image: this.prefix + image}
    });
  }

  deleteImage(index: number) {
    this.files.splice(index, 1);
  }

  inputChange(files: FileList) {
    if (files.length + this.files.length > this.max) {
      alert('上传文件过多');
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const ext = (/[.]/.exec(files[i].name)) ? /[^.]+$/.exec(files[i].name)[0] : '';
      if (this.supportedExtensions.indexOf(ext.toLowerCase()) === -1) {
        alert('不支持文件:' + files[i].name);
        return;
      }
    }
    this.uploadFiles.emit(files);
  }
}
