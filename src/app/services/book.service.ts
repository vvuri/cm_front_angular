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

  public editBook(id: string, book: IAddBook) {
    console.log('Update: ' + environment.apiUrl + 'books/' + id + ' - ', book);
    return this.httpClient.put<any>(environment.apiUrl + 'books/' + id, JSON.stringify(book))
      .pipe(
        tap(() => {
          this.updateBookList();
        }));
  }

  public deleteBook(id: string): Observable<any> {
    console.log('Delete: ' + environment.apiUrl + 'books/' + id);
    return this.httpClient.delete(environment.apiUrl + 'books/' + id)
      .pipe(
        tap(() => {
          this.updateBookList();
        }));
  }

  public getOneBook(id: string): Observable<IBook> {
    console.log('Get Book: ' + environment.apiUrl + 'books/' + id);
    return this.httpClient.get<IBook>(environment.apiUrl + 'books/' + id);
  }


  public deleteAllBooks(): Observable<any> {
    console.log('Delete All Books: ' + environment.apiUrl + 'book');
    return this.httpClient.delete(environment.apiUrl + 'books')
  }

  public generateBooks(count: number): Observable<IBook> {
    console.log(`Generate: ${count} books`);
    return this.httpClient.post<IBook>(environment.apiUrl + 'books/generate/' + count.toString(), {})
      .pipe(
        tap((books) => {
          this.updateBookList();
        }));
  }

}
