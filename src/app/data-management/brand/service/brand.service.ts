import {Injectable} from '@angular/core';
import {Brand} from '../data/brand';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) {
  }


  getAllBrand(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>('/api/lipstick/data-manager/brand/all');
  }
}
