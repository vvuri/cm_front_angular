import { Component, OnInit } from '@angular/core';
import { IBook, IAddBook } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { BookComponent } from '../book/book.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../dialods/add-book/add-book.component';
import { tap } from 'rxjs';

@Component({
  selector: 'cm-book-list',
  standalone: true,
  imports: [
    MatButtonModule,
    BookComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  public books: IBook[] = [];

  constructor(
    private bookService: BookService,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.loadBooks();
  }

  public addBook() {
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe((result: IAddBook) => {
      if (result) {
        console.log('The dialog was closed', result);
        this.bookService.addBook(result);
        // .pipe(
        //   tap(() => {
        //     this.loadBooks();
        //   })
        // ).subscribe();
      }
    });
  }

  private loadBooks(): void {
    console.log('loadBooks');
    this.bookService.getAll().subscribe(books => {
      this.books = books;
      console.log(books);
    });
  }
}
