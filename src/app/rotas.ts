import { Routes } from "@angular/router";
import { ExampleComponent } from "./components/example/example.component";
import { FamiliaComponent } from "./components/familia/familia.component";
import { LoginComponent } from "./components/login/login.component";
import { EstimativaComponent } from "./components/estimativa/estimativa.component";
import { ProdutoComponent } from './components/produto/produto.component';
// Arquivo de confguração para definição das rotas do sistema

export const routes:Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'example', component: ExampleComponent },
   { path: 'familia', component: FamiliaComponent },
   { path: 'estimativa', component: EstimativaComponent},
   { path: 'produto', component: ProdutoComponent}
]