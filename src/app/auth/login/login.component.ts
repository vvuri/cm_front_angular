import { Component } from '@angular/core';
import { IUser } from '../../interfaces/book';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public loginForm = new FormGroup({
    user: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public onLogin(): void {
    const authUser: IUser = {
      email: this.loginForm.get('user')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }

    this.authService.login(authUser).subscribe({
      next: () => {
        this.router.navigate(['/books']);
        // isAutorized ???
      },
      error: () => {
        console.log('No auth');
      }
    });
  }

  public get email(): FormControl<string> {
    return this.loginForm.get('user') as FormControl<string>;
  }

  public get password(): FormControl<string> {
    return this.loginForm.get('password') as FormControl<string>;
  }
}
