import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continente } from '../interfaces/continente.model';

@Injectable({
  providedIn: 'root'
})

export class ContinentesService {
  urlContinentes = 'https://thronesapi.com/api/v2/Continents';
  constructor(private http: HttpClient) { }

  getContinentes(): Observable<Continente[]>{
    return this.http.get<Continente[]>(this.urlContinentes);
  }
}

