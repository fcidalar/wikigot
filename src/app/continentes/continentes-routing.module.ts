import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentesComponent } from './continentes.component';

const routes: Routes = [{ path: '', component: ContinentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentesRoutingModule { }
