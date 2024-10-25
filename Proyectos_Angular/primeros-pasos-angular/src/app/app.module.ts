import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerFormularioComponent } from './primer-formulario/primer-formulario.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerFormularioComponent,
    InformacionPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
