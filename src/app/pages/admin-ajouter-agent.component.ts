import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-admin-ajouter-agent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './admin-ajouter-agent.component.html',
  styleUrls: ['./admin-ajouter-agent.component.css']
})
export class AdminAjouterAgentComponent {
  
  agent = {
    login: '',
    password: ''
  };

  ajouterAgent() {
    console.log('Nouvel agent ajouté :', this.agent);

    // ⚠️ Plus tard : appel à un service pour sauvegarder dans le backend
  }


}
