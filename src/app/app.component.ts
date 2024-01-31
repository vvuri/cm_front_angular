import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { BookListComponent } from './book-list/book-list.component';
import { AuthService } from './auth/auth.service';
import { IAddBook, IUser } from './interfaces/book';
import { AddBookComponent } from './dialods/add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from './services/book.service';

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
    private bookService: BookService,
    private dialog: MatDialog
  ) { }

  // public login() {
  //   const fake: IUser = { user: 'Fake', password: '123' }
  //   this.authService.login(fake);
  // }

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
      id: 'statistic',
      label: 'Statistic',
      icon: 'browse_activity',
      route: 'statistic'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      route: 'settings'
    },
    // {
    //   id: 'logout',
    //   label: 'Sign Out',
    //   icon: 'logout',
    //   route: '/'
    // },
  ];

  public activeLink: string = 'home';

  public addBook() {
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe((result: IAddBook) => {
      if (result) {
        console.log('The dialog was closed', result);
        this.bookService.addBook(result);
      }
    });
  }

}
