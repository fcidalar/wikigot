import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  urlPersonajes = 'https://thronesapi.com/api/v2/Characters';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.urlPersonajes);
  }
}
