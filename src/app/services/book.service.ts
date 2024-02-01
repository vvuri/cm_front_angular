import { Injectable } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];
  private _currentId: number = 3;

  public get books(): IBook[] {
    return this._books;
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
    this._books = [];
  }

  public getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public updateBookList(): void {
    this.getAll().subscribe(books => {
      this._books = books;
    });
  }

  public addBook(book: IAddBook): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + 'books', JSON.stringify(book))
      .pipe(
        tap(() => {
          this.updateBookList();
        }));
  }

  public editBook() {
    // TODO: Add Edit Form
  }

  public deleteBook() {
    // TODO: Delete book
  }

}
