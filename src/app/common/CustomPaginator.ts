import {MatPaginatorIntl} from '@angular/material';

export class CustomPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.firstPageLabel = '第一页';
    this.lastPageLabel = '最后一页';
    this.nextPageLabel = '下一页';
    this.previousPageLabel = '上一页';
    this.itemsPerPageLabel = '每页数据';
  }
}
