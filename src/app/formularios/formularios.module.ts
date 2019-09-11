import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { } from 'materialize-css';
import { } from 'materialize-stepper'
import * as $ from 'jquery'

// Componentes
import { CoreModule } from '../core/core.module';
import { BicAbasComponent } from './bic-abas/bic-abas.component';
import { BoletimInscricaoCadastralComponent } from './boletim-inscricao-cadastral/boletim-inscricao-cadastral.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarPendenciaComponent } from './cadastrar-pendencia/cadastrar-pendencia.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    BicAbasComponent,
    BoletimInscricaoCadastralComponent,
    CadastrarUsuarioComponent,
    CadastrarPendenciaComponent,
    LoginComponent
  ],
  exports: [
    BoletimInscricaoCadastralComponent,
    CadastrarUsuarioComponent,
    LoginComponent
  ],
  imports: [    
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule
  ]
})
export class FormulariosModule { }
