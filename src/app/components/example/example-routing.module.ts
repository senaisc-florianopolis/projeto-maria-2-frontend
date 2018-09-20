import { ExampleComponent } from './example.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExampleComponent } from './create-example/create-example.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent},
  { path: 'example/new', component: CreateExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
