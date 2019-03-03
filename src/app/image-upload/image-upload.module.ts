import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageUploadComponent} from './component/image-upload/image-upload.component';
import {FileDropDirective} from './directive/file-drop.directive';
import {ImageUploadService} from './service/image-upload.service';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {ImageShowDialogComponent} from './component/image-show-dialog/image-show-dialog.component';

@NgModule({
  declarations: [
    FileDropDirective,
    ImageUploadComponent,
    ImageShowDialogComponent
  ],
  entryComponents: [
    ImageShowDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [ImageUploadComponent],
  providers: [ImageUploadService]
})
export class ImageUploadModule {
}
