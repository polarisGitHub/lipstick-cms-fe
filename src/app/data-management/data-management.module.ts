import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrandComponent} from './brand/brand.component';
import {CategoryComponent} from './category/category.component';
import {GoodsComponent} from './goods/goods.component';
import {SkuComponent} from './sku/sku.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatGridListModule, MatIconModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BrandComponent,
    CategoryComponent,
    GoodsComponent,
    SkuComponent,
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
