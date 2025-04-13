import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { VisiteursService, Visiteur } from '../visiteurs.service';

@Component({
  selector: 'app-visiteurs-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './visiteurs-list.component.html',
  styleUrls: ['./visiteurs-list.component.css']
})
export class VisiteursListComponent implements OnInit {

  visiteurs: Visiteur[] = [];
  colonnes: string[] = ['nom', 'prenom', 'cin', 'destination' , 'dateEntree' , 'genre' , 'actions'];
  nombreVisiteurs: number = 0; // 👥 compteur du jour (via backend)

  constructor(
    private service: VisiteursService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.chargerVisiteurs();
    this.chargerCompteur();
  }

  // 📥 Charger tous les visiteurs (affichage tableau)
  chargerVisiteurs(): void {
    this.service.getVisiteurs().subscribe({
      next: data => this.visiteurs = data,
      error: err => console.error("Erreur lors du chargement des visiteurs", err)
    });
  }

  // 🗑️ Supprimer un visiteur
  supprimer(id: number | undefined): void {
    if (id && confirm("Voulez-vous supprimer ce visiteur ?")) {
      this.service.supprimerVisiteur(id).subscribe(() => this.chargerVisiteurs());
    }
  }

  // 🔄 Charger le compteur journalier depuis le backend
  chargerCompteur(): void {
    this.http.get<number>('http://localhost:8085/api/compteur')
      .subscribe({
        next: data => this.nombreVisiteurs = data,
        error: err => console.error("Erreur lors du chargement du compteur", err)
      });
  }

  // 👤 Retourner l’avatar en fonction du genre
  getAvatar(genre: string): string {
    return genre === 'Femme'
      ? 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
      : 'https://cdn-icons-png.flaticon.com/512/4140/4140061.png';
  }
}
