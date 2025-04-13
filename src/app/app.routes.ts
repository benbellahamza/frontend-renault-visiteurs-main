import { Routes } from '@angular/router';
import { ResponsableVisiteursComponent } from './pages/responsable-visiteurs/responsable-visiteurs.component';
import { AdminDashboardComponent } from './pages/admin-dashboard.component';
import { AdminAjouterAgentComponent } from './pages/admin-ajouter-agent.component';
import { AdminAjouterResponsableComponent } from './pages/admin-ajouter-responsable.component';
import { AdminListeAgentsComponent } from './pages/admin-liste-agents.component';
import { AdminListeResponsablesComponent } from './pages/admin-liste-responsables.component';
import { LoginComponent } from './auth/login/login.component';
import { VisiteursFormComponent } from './pages/visiteurs/visiteurs-form/visiteurs-form.component';
import { VisiteursListComponent } from './pages/visiteurs/visiteurs-list/visiteurs-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  },

      { path: 'ajouter', component: VisiteursFormComponent },
      { path: 'visiteurs', component: VisiteursListComponent },
   

  // ✅ Responsable indépendant
  { path: 'responsable', component: ResponsableVisiteursComponent },

  // ✅ Admin routes séparées
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/ajouter-agent', component: AdminAjouterAgentComponent },
  { path: 'admin/ajouter-responsable', component: AdminAjouterResponsableComponent },
  { path: 'admin/liste-agents', component: AdminListeAgentsComponent },
  { path: 'admin/liste-responsables', component: AdminListeResponsablesComponent }
];
