import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Visiteur, VisiteursService } from '../visiteurs/visiteurs.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { SelectionModel } from '@angular/cdk/collections';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-responsable-visiteurs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [DatePipe],
  templateUrl: './responsable-visiteurs.component.html',
  styleUrls: ['./responsable-visiteurs.component.css']
})
export class ResponsableVisiteursComponent implements OnInit {
  displayedColumns: string[] = ['select', 'nom', 'prenom', 'cin', 'destination', 'genre', 'dateEntree'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);

  totalItems = 0;
  pageSize = 5;
  currentPage = 0;
  sortField = 'dateEntree';
  sortDirection = 'desc';
  filtreNom: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private visiteursService: VisiteursService) {}

  ngOnInit(): void {
    this.chargerVisiteurs();
  }

  chargerVisiteurs(): void {
    this.visiteursService
      .getVisiteursPaginés(this.currentPage, this.pageSize, this.sortField, this.sortDirection)
      .subscribe((data: { content: Visiteur[]; totalElements: number }) => {
        this.dataSource = new MatTableDataSource<any>(data.content);
        this.totalItems = data.totalElements;
        this.dataSource.filterPredicate = (data, filter) =>
          data.nom.trim().toLowerCase().includes(filter);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.appliquerFiltre();
      });
  }
  

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.chargerVisiteurs();
  }

  onSortChange(event: any) {
    this.sortField = event.active;
    this.sortDirection = event.direction;
    this.chargerVisiteurs();
  }

  appliquerFiltre() {
    this.dataSource.filter = this.filtreNom.trim().toLowerCase();
  }

  exporterExcel() {
    window.open('http://localhost:8085/api/responsable/export/excel', '_blank');
  }

  exporterSelection() {
    const selected = this.selection.selected;
    if (selected.length === 0) {
      alert("Veuillez sélectionner au moins un visiteur à exporter.");
      return;
    }

    // 🎯 Format des données pour l’export
    const exportData = selected.map(v => ({
      Nom: v.nom,
      Prénom: v.prenom,
      CIN: v.cin,
      Genre: v.genre,
      Destination: v.destination,
      "Date d’entrée": v.dateEntree
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sélection');

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    FileSaver.saveAs(blob, 'visiteurs_selection.xlsx');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
