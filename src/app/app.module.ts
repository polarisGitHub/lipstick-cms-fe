import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
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
    ///////////
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
