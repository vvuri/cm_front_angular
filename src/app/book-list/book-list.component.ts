import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { BookComponent } from '../book/book.component';
import { MatButtonModule } from '@angular/material/button';

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
export class BookListComponent implements OnInit{
  public books: IBook[] = [];

  constructor(
    private bookService: BookService
  ) { }

  public ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks(): void {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }
}
