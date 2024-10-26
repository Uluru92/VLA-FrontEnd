import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerFormularioComponent } from './primer-formulario/primer-formulario.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { FormsModule } from '@angular/forms';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerFormularioComponent,
    InformacionPersonalComponent,
    ListadoPaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
