import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RestResponse} from './data/rest-response';
import {AlertService} from '../alert/alert.service';

@Injectable()
export class HttpRestResponseInterceptor implements HttpInterceptor {

  private SUCCESS = 'success';

  constructor(private alertService: AlertService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const restResponse: RestResponse = Object.assign(new RestResponse(), event.body);
          if (restResponse.code === this.SUCCESS) {
            return event.clone({body: restResponse.data});
          } else {
            this.alertService.alert('error', restResponse.message);
            return event.clone({body: null});
          }
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.alert('error', '出错了');
        return throwError(err);
      })
    );
  }
}
