import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { BookListComponent } from './book-list/book-list.component';
import { AuthService } from './auth/auth.service';
import { IAddBook } from './interfaces/book';
import { AddBookComponent } from './dialods/add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from './services/book.service';
import { EditBookComponent } from './dialods/edit-book/edit-book.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'cm_front_angular';

  constructor(
    public authService: AuthService,
    private bookService: BookService,
    private dialog: MatDialog,
  ) { }

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
  ];

  public activeLink: string = 'home';

  public addBook() {
    const dialogRef = this.dialog.open(AddBookComponent,
      { width: '500px', maxWidth: '100%', panelClass: 'custom-dialog-class' });

    dialogRef.afterClosed().subscribe((result: IAddBook) => {
      if (result) {
        this.bookService.addBook(result).subscribe();
      }
    });
  }

  public editBook(id: string, book: IAddBook) {
    const dialogRef = this.dialog.open(EditBookComponent, { data: book });

    dialogRef.afterClosed().subscribe((result: IAddBook) => {
      if (result) {
        // console.log('The dialog  add Book Edit', result);
        this.bookService.editBook(id, result).subscribe();
      }
    });
  }

}
