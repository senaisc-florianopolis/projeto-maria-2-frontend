import { ExampleRoutingModule } from './components/example/example-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleModule } from './components/example/example.module';
import { NavBarComponent } from './theme/nav-bar/nav-bar.component';
import { SidenavComponent } from './theme/sidenav/sidenav.component';
import { CarregarComponent } from './theme/carregar/carregar.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPageComponent } from './theme/header-page/header-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { UploadComponent } from './components/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { FamiliaModule } from './components/familia/familia.module';
import { HttpModule } from '@angular/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavComponent,
    CarregarComponent,
	LoginComponent,
    HeaderPageComponent,
    UploadComponent,
    // ReportComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ExampleRoutingModule,
    ExampleModule,
    HttpClientModule,
    FileUploadModule,
    LoginModule,
	FormsModule,
	FamiliaModule,
	HttpModule,
	FileUploadModule,
	CommonModule,
	FormsModule,
  ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  providers: [
	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }