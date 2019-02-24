import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {SkuServiceService} from '../service/sku-service.service';
import {SkuListItem} from '../data/sku-list-item';
import {PageSizeOption} from '../../../common/PageSizeOption';
import {Page} from '../../../common/Page';

@Component({
  selector: 'sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.scss']
})
export class SkuListComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  private dataSource: MatTableDataSource<SkuListItem> = new MatTableDataSource<SkuListItem>();

  private pageSizeOption: number[] = PageSizeOption.pageSize;

  private totalCount: number;

  constructor(private skuManagerService: SkuServiceService) {
  }

  ngOnInit(): void {
    this.getList(new Page(0, this.pageSizeOption[0]));
    this.paginator.page.subscribe((page: PageEvent) => {
      this.getList(new Page(page.pageIndex, page.pageSize));
    });
  }

  private getList(page: Page): void {
    this.skuManagerService.getSkuList(page).subscribe(l => {
      this.dataSource.data = l.list;
      this.totalCount = l.totalCount;
    });
  }

  search(): void {

  }
}
