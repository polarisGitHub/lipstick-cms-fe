import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDividerModule,
  MatIconModule,
  MatPaginatorIntl,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {CustomPaginator} from './common/CustomPaginator';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {httpInterceptorProviders} from './common/http-interceptor/interceptor-providers';
import {HttpClientModule} from '@angular/common/http';
import {AlertTemplateComponent} from './common/alert/alert-template/alert-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlertTemplateComponent,
  ],
  entryComponents: [
    AlertTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //////////
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatDividerModule,
    MatSnackBarModule,
    ///////////
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomPaginator},
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
