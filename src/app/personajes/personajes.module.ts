import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { DetallesPersonajeComponent } from './components/detalles-personaje/detalles-personaje.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonajesComponent,
    CardPersonajeComponent,
    DetallesPersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PersonajesModule { }
