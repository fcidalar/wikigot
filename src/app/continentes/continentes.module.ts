import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinentesRoutingModule } from './continentes-routing.module';
import { ContinentesComponent } from './continentes.component';


@NgModule({
  declarations: [
    ContinentesComponent
  ],
  imports: [
    CommonModule,
    ContinentesRoutingModule
  ]
})
export class ContinentesModule { }
