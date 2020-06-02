import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClienteSalvarComponent } from './components/Cliente/cliente-salvar/cliente-salvar.component';
import { ClienteAtualizarComponent } from './components/Cliente/cliente-atualizar/cliente-atualizar.component';
import { ClienteListarComponent } from './components/Cliente/cliente-listar/cliente-listar.component';
import { ClienteApagarComponent } from './components/Cliente/cliente-apagar/cliente-apagar.component';
import { CasaSalvarComponent } from './components/Casa/casa-salvar/casa-salvar.component';
import { CasaAtualizarComponent } from './components/Casa/casa-atualizar/casa-atualizar.component';
import { CasaListarComponent } from './components/Casa/casa-listar/casa-listar.component';
import { CasaApagarComponent } from './components/Casa/casa-apagar/casa-apagar.component';
import { EspetaculoApagarComponent } from './components/Espetaculo/espetaculo-apagar/espetaculo-apagar.component';
import { EspetaculoAtualizarComponent } from './components/Espetaculo/espetaculo-atualizar/espetaculo-atualizar.component';
import { EspetaculoListarComponent } from './components/Espetaculo/espetaculo-listar/espetaculo-listar.component';
import { EspetaculoSalvarComponent } from './components/Espetaculo/espetaculo-salvar/espetaculo-salvar.component';
import { VendaSalvarComponent } from './components/Venda/venda-salvar/venda-salvar.component';
import { VendaListarComponent } from './components/Venda/venda-listar/venda-listar.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full' },
  {path: '**', redirectTo: '/' , pathMatch: 'full'}
  
];


@NgModule({
  declarations: [
    AppComponent,
    ClienteSalvarComponent,
    ClienteAtualizarComponent,
    ClienteListarComponent,
    ClienteApagarComponent,
    CasaSalvarComponent,
    CasaAtualizarComponent,
    CasaListarComponent,
    CasaApagarComponent,
    EspetaculoApagarComponent,
    EspetaculoAtualizarComponent,
    EspetaculoListarComponent,
    EspetaculoSalvarComponent,
    VendaSalvarComponent,
    VendaListarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
