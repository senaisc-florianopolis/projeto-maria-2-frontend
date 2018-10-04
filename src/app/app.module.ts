import { ExampleRoutingModule } from './components/example/example-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleModule } from './components/example/example.module';
import { NavBarComponent } from './theme/nav-bar/nav-bar.component';
import { SidenavComponent } from './theme/sidenav/sidenav.component';
import { CarregarComponent } from './theme/carregar/carregar.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './components/upload/upload.component';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavComponent,
    CarregarComponent,
    // UploadComponent,
    // ReportComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ExampleRoutingModule,
    ExampleModule,
    HttpClientModule,
    FileUploadModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }