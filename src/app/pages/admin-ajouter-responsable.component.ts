import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-ajouter-responsable',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './admin-ajouter-responsable.component.html',
  styleUrls: ['./admin-ajouter-responsable.component.css']
})
export class AdminAjouterResponsableComponent {
  responsable = {
    login: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  ajouterResponsable() {
    this.http.post('http://localhost:8085/api/admin/responsables', this.responsable)
      .subscribe(() => {
        alert('Responsable ajouté avec succès');
        this.responsable = { login: '', password: '' };
      }, () => alert("Erreur lors de l'ajout du responsable"));
  }
}
