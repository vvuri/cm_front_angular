import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { BookComponent } from '../book/book.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    BookComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  // public books: IBook[] = [];

  public get books(): IBook[] {
    return this.bookService.books;
  }

  constructor(
    private bookService: BookService,
    private dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.bookService.updateBookList();
  }

}
