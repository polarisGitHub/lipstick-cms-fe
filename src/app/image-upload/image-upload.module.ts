import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageUploadComponent} from './component/image-upload.component';
import {FileDropDirective} from './directive/file-drop.directive';
import {ImageUploadService} from './service/image-upload.service';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    FileDropDirective,
    ImageUploadComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [ImageUploadComponent],
  providers: [ImageUploadService]
})
export class ImageUploadModule {
}
