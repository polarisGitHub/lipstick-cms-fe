import {Component, OnInit} from '@angular/core';
import {SkuDetailItem} from '../data/sku-detail-item';
import {SkuService} from '../service/sku.service';
import {ActivatedRoute, Params} from '@angular/router';
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

  uploadFigure(files: FileList) {
    this.fileUploadService.upload(files).subscribe(l => {

    });
  }

  uploadImages(files: FileList) {
    this.fileUploadService.upload(files).subscribe(l => {

    });
  }
}
