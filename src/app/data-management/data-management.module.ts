import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandComponent} from './brand/brand.component';
import {CategoryComponent} from './category/category.component';
import {GoodsComponent} from './goods/goods.component';
import {SkuComponent} from './sku/sku.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BrandComponent,
    CategoryComponent,
    GoodsComponent,
    SkuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'brand', component: BrandComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'goods', component: GoodsComponent},
      {path: 'sku', component: SkuComponent},
    ])
  ]
})
export class DataManagementModule {
}
