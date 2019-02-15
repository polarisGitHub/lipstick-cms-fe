import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatButtonModule, MatDividerModule,
  MatIconModule,
  MatPaginatorIntl,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {CustomPaginator} from './common/CustomPaginator';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //////////
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatDividerModule,
    ///////////
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomPaginator},
    // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
