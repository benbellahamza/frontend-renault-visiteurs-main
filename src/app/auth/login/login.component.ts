import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          const role = this.authService.getRole();
          switch (role) {
            case 'ADMIN':
              this.router.navigate(['/admin']);
              break;
            case 'RESPONSABLE':
              this.router.navigate(['/responsable']);
              break;
            case 'AGENT':
              this.router.navigate(['/visiteurs']);
              break;
            default:
              this.errorMessage = 'Rôle inconnu. Veuillez contacter l\'administrateur.';
          }
        },
        error: () => this.errorMessage = 'Email ou mot de passe incorrect'
      });
    }
  }
  
}
