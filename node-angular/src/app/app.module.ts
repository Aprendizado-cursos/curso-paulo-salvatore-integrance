import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ColaboradorCardComponent } from './colaborador-card/colaborador-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaCardComponent } from './empresa-card/empresa-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    ColaboradorCardComponent,
    EmpresasComponent,
    EmpresaCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
