import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { BookListComponent } from './book-list/book-list.component';
import { AuthService } from './auth/auth.service';

interface INavigatinItem {
  id: string,
  label: string,
  icon: string,
  route: string
}

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatListModule,
    BookListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'cm_front_angular';

  constructor(
    public authService: AuthService,
  ) { }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }

  public navList: INavigatinItem[] = [
    {
      id: 'listbooks',
      label: 'Books list',
      icon: 'demography',
      route: 'books'
    },
    {
      id: 'add',
      label: 'Add Book',
      icon: 'library_add',
      route: 'addBook'
    },
    {
      id: 'edit',
      label: 'Edit Books',
      icon: 'edit',
      route: 'edit'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      route: 'settings'
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: 'logout',
      route: '/'
    },
  ];

  public activeLink: string = 'home';
}
