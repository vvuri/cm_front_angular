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

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
    this._books = [];
  }

  public getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public addBook(book: IAddBook): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + 'books', JSON.stringify(book))
      .pipe(
        tap(() => {
          console.log('Add book 3');
          this.getAll().subscribe();
          this.router.navigate(['books']);
        })
      );
  }

  public editBook() {
    // TODO: Add Edit Form
  }

  public deleteBook() {
    // TODO: Delete book
  }

}
