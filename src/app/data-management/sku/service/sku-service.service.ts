import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SkuListItem} from '../data/sku-list-item';
import {PageResult} from '../../../common/PageResult';
import {Page} from '../../../common/Page';

@Injectable({
  providedIn: 'root'
})
export class SkuServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getSkuList(page: Page): Observable<PageResult<SkuListItem>> {
    const params: HttpParams = new HttpParams().set('pageNo', String(page.pageNo)).set('pageSize', String(page.pageSize));
    return this.httpClient.get<PageResult<SkuListItem>>('/api/lipstick/data-manager/sku/list', {params: params});
  }
}
