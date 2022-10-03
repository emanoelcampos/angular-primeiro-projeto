import { MeuPrimeiro } from './meu-primeiro/meu-primeiro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiro3Component } from './meu-primeiro3/meu-primeiro3.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro,
    MeuPrimeiro2Component,
    MeuPrimeiro3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
