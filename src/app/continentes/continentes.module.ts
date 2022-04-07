import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinentesRoutingModule } from './continentes-routing.module';
import { ContinentesComponent } from './continentes.component';
import { CardContinenteComponent } from './components/card-continente/card-continente.component';


@NgModule({
  declarations: [
    ContinentesComponent,
    CardContinenteComponent
  ],
  imports: [
    CommonModule,
    ContinentesRoutingModule
  ]
})
export class ContinentesModule { }
