import { Routes } from "@angular/router";
import { ExampleComponent } from "./components/example/example.component";
import { LoginComponent } from "./components/login/login.component";

// Arquivo de confguração para definição das rotas do sistema


export class Rotas {
    public path: Routes = [
        { path: 'login', component: LoginComponent },
        { path: 'example', component: ExampleComponent },
    ];
}