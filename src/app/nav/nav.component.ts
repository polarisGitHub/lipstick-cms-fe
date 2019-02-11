import {Component} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

interface FoodNode {
  name: string;
  url?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '数据管理',
    children: [
      {name: '品牌管理', url: 'data/management/brand'},
      {name: '类别管理', url: 'data/management/category'},
      {name: '商品管理', url: 'data/management/goods'},
      {name: 'sku管理', url: 'data/management/sku'},
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    (node: FoodNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        url: node.url,
        level: level,
      };
    }, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
