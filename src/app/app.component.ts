import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // nécessaire pour <router-outlet>

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // pour activer le système de navigation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
