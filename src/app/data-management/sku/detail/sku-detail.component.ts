import {Component, OnInit} from '@angular/core';
import {SkuDetailItem} from '../data/sku-detail-item';
import {SkuService} from '../service/sku.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'sku-detail',
  templateUrl: './sku-detail.component.html',
  styleUrls: ['./sku-detail.component.scss']
})
export class SkuDetailComponent implements OnInit {

  data: SkuDetailItem;

  figure: string[];

  detailImages: string[];

  constructor(
    private skuService: SkuService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.skuService.getById(+params.get('id')).subscribe(l => {
        this.data = l;
        this.figure = Array.from(['/image/' + l.figure]);
        this.detailImages = [];
        if (l.imgs) {
          this.detailImages = l.imgs.map(i => {
            return '/image/' + i;
          });
        }
      });
    });
  }

}
