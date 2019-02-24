import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SkuListItem} from '../data/sku-list-item';
import {PageResult} from '../../../common/PageResult';
import {Page} from '../../../common/Page';
import {SkuListSearchParam} from '../data/sku-list-search-param';

@Injectable({
  providedIn: 'root'
})
export class SkuServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getSkuList(searchParam: SkuListSearchParam, page: Page): Observable<PageResult<SkuListItem>> {
    let params: HttpParams = new HttpParams();
    if (searchParam.brandCode) {
      params = params.set('brandCode', searchParam.brandCode);
    }
    if (searchParam.skuCode) {
      params = params.set('skuCode', searchParam.skuCode);
    }
    if (searchParam.skuName) {
      params = params.set('skuName', searchParam.skuName);
    }
    params = params.set('pageNo', String(page.pageNo));
    params = params.set('pageSize', String(page.pageSize));
    return this.httpClient.get<PageResult<SkuListItem>>('/api/lipstick/data-manager/sku/list', {params: params});
  }
}
