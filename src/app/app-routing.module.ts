import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'personajes',
    loadChildren: () =>
      import('./personajes/personajes.module').then((m) => m.PersonajesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'continentes',
    loadChildren: () =>
      import('./continentes/continentes.module').then(
        (m) => m.ContinentesModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
