export class PageResult<T> {
  list: T[];
  pageNo: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
}
