import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {SkuService} from '../service/sku.service';
import {SkuListItem} from '../data/sku-list-item';
import {PageSizeOption} from '../../../common/PageSizeOption';
import {Page} from '../../../common/Page';
import {SkuListSearchParam} from '../data/sku-list-search-param';
import {Brand} from '../../brand/data/brand';
import {Observable} from 'rxjs';
import {BrandService} from '../../brand/service/brand.service';

@Component({
  selector: 'sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.scss']
})
export class SkuListComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  private brands$: Observable<Brand[]>;

  private dataSource: MatTableDataSource<SkuListItem> = new MatTableDataSource<SkuListItem>();

  private pageSizeOption: number[] = PageSizeOption.pageSize;

  private totalCount: number;

  searchParam: SkuListSearchParam = new SkuListSearchParam();

  constructor(private skuManagerService: SkuService,
              private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.brands$ = this.brandService.getAllBrand();
    this.getList(this.searchParam, new Page(0, this.pageSizeOption[0]));
    this.paginator.page.subscribe((page: PageEvent) => {
      this.getList(this.searchParam, new Page(page.pageIndex, page.pageSize));
    });
  }

  private getList(searchParam: SkuListSearchParam, page: Page): void {
    this.skuManagerService.getSkuList(searchParam, page).subscribe(l => {
      this.dataSource.data = l.list;
      this.totalCount = l.totalCount;
    });
  }

  search(): void {
    this.getList(this.searchParam, new Page(this.paginator.pageIndex, this.paginator.pageSize));
  }
}

