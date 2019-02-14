import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SkuComponent implements AfterViewInit {

  formControl: string;
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngAfterViewInit(): void {
  }
}



