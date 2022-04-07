import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    this.auth.isAuthenticated$.subscribe({
      next: (isAuth) => {

        if (!isAuth) {
          this.router.navigateByUrl('/home');

          Swal.fire({
            title: 'Alto ahí!',
            text: 'Debes estar logueado para acceder a esta ruta.',
            imageUrl: './assets/images/slap-game-of-thrones.gif',
            imageWidth: 400,
            imageHeight: 200,
          });
        }
      },
    });

    return this.auth.isAuthenticated$;
  }
}
