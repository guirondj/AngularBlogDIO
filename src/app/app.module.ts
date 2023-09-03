import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPesquisaComponent } from './componentes/nav-pesquisa/nav-pesquisa.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { ArtigosComponent } from './componentes/artigos/artigos.component';
import { HomeComponent } from './pages/home/home.component';
import { AllArtigoComponent } from './componentes/all-artigo/all-artigo.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPesquisaComponent,
    NavBarComponent,
    BigCardComponent,
    SmallCardComponent,
    ArtigosComponent,
    HomeComponent,
    AllArtigoComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
