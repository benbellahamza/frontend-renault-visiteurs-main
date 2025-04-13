import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Visiteur {
  genre: '' | 'Homme' | 'Femme';
  id?: number;
  nom: string;
  prenom: string;
  cin: string;
  destination: string;
  dateEntree?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class VisiteursService {
  private apiUrl = 'http://localhost:8085/api/visiteurs';
  private responsableUrl = 'http://localhost:8085/api/responsable';

  constructor(private http: HttpClient) {}

  // 📋 Agent de saisie
  getVisiteurs(): Observable<Visiteur[]> {
    return this.http.get<Visiteur[]>(this.apiUrl);
  }

  ajouterVisiteur(visiteur: Visiteur): Observable<Visiteur> {
    return this.http.post<Visiteur>(this.apiUrl, visiteur);
  }

  supprimerVisiteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // 📊 Responsable - visiteurs paginés avec tri
  getVisiteursPaginés(page: number, size: number, sortField: string, sortDir: string): Observable<any> {
    const url = `http://localhost:8085/api/responsables/visiteurs?page=${page}&size=${size}&sortBy=${sortField}&direction=${sortDir}`;
    return this.http.get<any>(url);
  }

  // 📤 Responsable - export Excel
  exportVisiteursExcel(): Observable<Blob> {
    return this.http.get(`${this.responsableUrl}/export/excel`, { responseType: 'blob' });
  }
}
