import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; // ✅ Ajouté
import { ReactiveFormsModule } from '@angular/forms';   // ✅ Ajouté pour plus de sécurité

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule, // ✅
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatRadioModule,
      MatGridListModule,
      MatSelectModule,
      MatSidenavModule,
      MatListModule,
      MatPaginatorModule,
      MatSortModule,       // ✅
      MatTableModule,
      MatIconModule,
      MatToolbarModule
    )
  ]
};
