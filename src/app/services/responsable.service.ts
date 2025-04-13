import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Responsable {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

    private apiUrl = 'http://localhost:8085/api/gestion-responsables';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.apiUrl);
  }

  supprimer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  // ajouter responsable
}
