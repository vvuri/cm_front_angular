import { Component } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'cm-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

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

