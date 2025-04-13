import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AgentDeSaisieService, AgentDeSaisie } from '../services/agent.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-liste-agents',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './admin-liste-agents.component.html',
  styleUrls: ['./admin-liste-agents.component.css']
})
export class AdminListeAgentsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'login', 'actions'];
  dataSource = new MatTableDataSource<AgentDeSaisie>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private agentService: AgentDeSaisieService) {}

  ngOnInit(): void {
    this.chargerAgents();
  }

  chargerAgents() {
    this.agentService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  supprimerAgent(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet agent ?')) {
      this.agentService.supprimer(id).subscribe(() => {
        this.chargerAgents(); // Rafraîchir après suppression
      });
    }
  }
}
