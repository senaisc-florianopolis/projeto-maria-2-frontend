import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
import { ExampleComponent } from './components/example/example.component';
import { CreateExampleComponent } from './components/example/create-example/create-example.component';
import { ExampleService } from './components/example/example.service';
import { routes } from './rotas';
import { HttpModule } from '@angular/http';
import { FamiliaComponent } from "./components/familia/familia.component";
import { EstimativaComponent } from './components/estimativa/estimativa.component';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavComponent,
    CarregarComponent,
    LoginComponent,
    ExampleComponent,
    CreateExampleComponent,
    UploadComponent,
    HeaderPageComponent,
    FamiliaComponent,
    EstimativaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
	  RouterModule.forRoot([]),
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule
  ],
  exports: [],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }