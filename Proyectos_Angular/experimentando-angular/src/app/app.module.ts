import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GeneralComponent } from './general/general.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { NgModule } from '@ng-bootstrap/ng-bootstrap'

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
  //  NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
