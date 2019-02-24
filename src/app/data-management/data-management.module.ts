import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandComponent} from './brand/brand.component';
import {CategoryComponent} from './category/category.component';
import {GoodsComponent} from './goods/goods.component';
import {SkuListComponent} from './sku/list/sku-list.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SkuDetailComponent} from './sku/detail/sku-detail.component';

@NgModule({
  declarations: [
    BrandComponent,
    CategoryComponent,
    GoodsComponent,
    SkuListComponent,
    SkuDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild([
      {path: 'brand', component: BrandComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'goods', component: GoodsComponent},
      {path: 'sku', component: SkuListComponent},
      {path: 'sku/:id', component: SkuDetailComponent},
    ])
  ]
})
export class DataManagementModule {
}
