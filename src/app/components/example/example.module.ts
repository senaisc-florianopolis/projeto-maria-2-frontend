// import { HeaderPageComponent } from '../../theme/header-page/header-page.component';
import { ExampleComponent } from './example.component';
import { CreateExampleComponent } from './create-example/create-example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleService } from './example.service';
import { HttpModule } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
// import { UploadComponent } from '../upload/upload.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    HttpModule,
    FileUploadModule,
	FormsModule,
  ],
  declarations: [
    ExampleComponent,
    CreateExampleComponent,
    // UploadComponent,
	// HeaderPageComponent
  ],
  providers: [
    ExampleService
  ]
})
export class ExampleModule { }
