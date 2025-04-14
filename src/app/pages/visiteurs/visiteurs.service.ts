import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Visiteur {
  id?: number;
  nom: string;
  prenom: string;
  cin: string;
  genre: '' | 'Homme' | 'Femme';
  destination: string;
  telephone: string;
  matricule?: string;
  dateEntree?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class VisiteursService {
  private apiUrl = 'http://localhost:8085/api/visiteurs';

  constructor(private http: HttpClient) {}

  // ✅ Méthode pour récupérer tous les visiteurs
  getVisiteurs(): Observable<Visiteur[]> {
    return this.http.get<Visiteur[]>(this.apiUrl);
  }

  // ✅ Méthode pour récupérer les visiteurs paginés
  getVisiteursPaginés(
    page: number,
    size: number,
    sortField: string,
    sortDir: string
  ): Observable<{ content: Visiteur[]; totalElements: number }> {
    const url = `http://localhost:8085/api/responsables/visiteurs?page=${page}&size=${size}&sortBy=${sortField}&direction=${sortDir}`;
    return this.http.get<{ content: Visiteur[]; totalElements: number }>(url);
  }

  // ✅ Méthode pour ajouter un visiteur
  ajouterVisiteur(visiteur: Visiteur): Observable<Visiteur> {
    return this.http.post<Visiteur>(this.apiUrl, visiteur);
  }

  // ✅ Méthode pour supprimer un visiteur
  supprimerVisiteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
