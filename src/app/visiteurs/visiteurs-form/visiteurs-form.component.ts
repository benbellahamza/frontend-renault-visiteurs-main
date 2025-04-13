import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { VisiteursService, Visiteur } from '../visiteurs.service';

@Component({
  selector: 'app-visiteurs-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule
  ],
  templateUrl: './visiteurs-form.component.html',
  styleUrls: ['./visiteurs-form.component.css']
})
export class VisiteursFormComponent {
  visiteur: Visiteur = {
    genre: '',
    nom: '',
    prenom: '',
    cin: '',
    destination: ''
  };

  constructor(private visiteursService: VisiteursService) {}

  setGenre(genre: 'Homme' | 'Femme'): void {
    this.visiteur.genre = genre;
  }

  onSubmit(): void {
    this.visiteursService.ajouterVisiteur(this.visiteur).subscribe({
      next: () => {
        alert('Visiteur ajouté avec succès !');
        this.visiteur = { genre: '', nom: '', prenom: '', cin: '', destination: '' };
      },
      error: () => alert("Erreur lors de l'ajout du visiteur")
    });
  }

  isGenreSelected(g: string): boolean {
    return this.visiteur.genre === g;
  }
}
