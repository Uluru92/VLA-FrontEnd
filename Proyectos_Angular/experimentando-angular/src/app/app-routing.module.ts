import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { FormularioUnoComponent } from './formulario-uno/formulario-uno.component';
import { GeneralComponent } from './general/general.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  { path: 'ConsumoApi', component: ConsumoApiComponent },
  { path: 'FormularioUno', component: FormularioUnoComponent },
  { path: 'General', component: GeneralComponent },
  { path: 'Directivas', component: DirectivasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
