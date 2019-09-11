
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarPrincipalComponent } from './core/navbar-principal/navbar-principal.component';
import { BoletimInscricaoCadastralComponent } from './formularios/boletim-inscricao-cadastral/boletim-inscricao-cadastral.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarUsuarioComponent } from './formularios/cadastrar-usuario/cadastrar-usuario.component';
import { AppComponent } from './app.component';
import { CadastrarPendenciaComponent } from './formularios/cadastrar-pendencia/cadastrar-pendencia.component';
import { LoginComponent } from './formularios/login/login.component';
import { CoreModule } from './core/core.module';



const APP_ROUTES: Routes = [
  // { path: '', component: HomeComponent },
  // { path:'dashboard', component: NavbarPrincipalComponent},
  { path:"", component: LoginComponent},
  { path:"bic", component: BoletimInscricaoCadastralComponent },
  { path:"boletim", component: CadastrarUsuarioComponent },
  { path:"app", component: AppComponent },
  { path:"pendencia", component: CadastrarPendenciaComponent},
  { path:"core", component: CoreModule}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

// const homeroutes: Routes = [
  //   { path: '', component: HomeComponent },
  //   { path: 'dashboard', component: NavbarPrincipalComponent },
  //   { path: 'bci', component: BoletimInscricaoCadastralComponent }
  //
  // ];

  // @NgModule({
    //   imports: [RouterModule.forRoot(homeroutes)],
    //   exports: [RouterModule]
    // })
    // export class AppRoutingModule {
      // }
