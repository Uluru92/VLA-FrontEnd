import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    ConsumoApiComponent,
    DirectivasComponent,
    FormularioUnoComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
