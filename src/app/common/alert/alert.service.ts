import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AlertTemplateComponent} from './alert-template/alert-template.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) {
  }

  public alert(color: string, data: any = ''): void {
    this.snackBar.openFromComponent(AlertTemplateComponent, {
      verticalPosition: 'top',
      duration: 200000,
      panelClass: color,
      data: data
    });
  }
}
