import { Component } from '@angular/core';
import { IUser } from '../../interfaces/book';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cm-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  public loginForm = new FormGroup({
    user: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public onLogin(): void {
    const authUser: IUser = {
      user: this.loginForm.get('user')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }

    // this.dialogRef.close(book);
  }
}
