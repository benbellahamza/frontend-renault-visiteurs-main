import { VisiteursFormComponent } from '../../visiteurs/visiteurs-form/visiteurs-form.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, VisiteursFormComponent],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {}
