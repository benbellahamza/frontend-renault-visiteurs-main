import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResponsableService, Responsable } from '../services/responsable.service';

@Component({
  selector: 'app-admin-liste-responsables',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './admin-liste-responsables.component.html',
  styleUrls: ['./admin-liste-responsables.component.css']
})
export class AdminListeResponsablesComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'login', 'actions'];
  dataSource = new MatTableDataSource<Responsable>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private responsableService: ResponsableService) {}

  ngOnInit(): void {
    this.chargerResponsables();
  }

  chargerResponsables() {
    this.responsableService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  supprimerResponsable(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce responsable ?')) {
      this.responsableService.supprimer(id).subscribe(() => {
        this.chargerResponsables();
      });
    }
  }
}
