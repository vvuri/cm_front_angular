import { Component } from '@angular/core';
import { IRegUser } from '../../interfaces/book';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';

@Component({
  selector: 'cm-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  constructor(
    private authService: AuthService
  ){}

  public registerForm = new FormGroup({
    name: new FormControl<string>(''),
    user: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public onRegister(): void {
    const newUser: IRegUser = {
      name: this.registerForm.get('name')?.value ?? '',
      user: this.registerForm.get('user')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? ''
    }

    this.authService.register(newUser);
  }

  public get name(): FormControl<string> {
    return this.registerForm.get('name') as FormControl<string>;
  }

  public get email(): FormControl<string> {
    return this.registerForm.get('user') as FormControl<string>;
  }

  public get password(): FormControl<string> {
    return this.registerForm.get('password') as FormControl<string>;
  }
}
