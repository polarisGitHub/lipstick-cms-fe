export class Page {

  constructor(
    private _pageNo: number,
    public pageSize: number,
  ) {

  }

  get pageNo() {
    return this._pageNo + 1;
  }

  set pageNo(pageNo: number) {
    this.pageNo = pageNo;
  }
}
