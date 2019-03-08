import {Component, OnInit} from '@angular/core';
import {SkuDetailItem} from '../data/sku-detail-item';
import {SkuService} from '../service/sku.service';
import {ActivatedRoute} from '@angular/router';
import {FileUploadService} from '../../../common/file-upload/file-upload.service';

@Component({
  selector: 'sku-detail',
  templateUrl: './sku-detail.component.html',
  styleUrls: ['./sku-detail.component.scss']
})
export class SkuDetailComponent implements OnInit {

  data: SkuDetailItem;


  constructor(
    private skuService: SkuService,
    private activatedRoute: ActivatedRoute,
    private fileUploadService: FileUploadService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.skuService.getById(+params.get('id')).subscribe(l => {
        this.data = l;
      });
    });
  }

  uploadFigure(files: FileList): void {
    this.fileUploadService.upload(files).subscribe(l => {
      if (l) {
        this.data.figure = l[0];
      }
    });
  }

  uploadImages(files: FileList): void {
    this.fileUploadService.upload(files).subscribe(l => {
      if (l) {
        this.data.imgs = this.data.imgs.concat(l);
      }
    });
  }

  save(): void {

  }
}
