import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './general/general.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { Testimonios2Component } from './testimonios2/testimonios2.component'

@NgModule({
  declarations: [
    AppComponent,
    ConsumoApiComponent,
    DirectivasComponent,
    FormularioUnoComponent,
    GeneralComponent,
    TestimoniosComponent,
    Testimonios2Component
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
