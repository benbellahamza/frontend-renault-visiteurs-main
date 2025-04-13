import { Component } from '@angular/core';
import { VisiteursListComponent } from '../../visiteurs/visiteurs-list/visiteurs-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, VisiteursListComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {}
