import { Injectable } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];
  private _currentId: number = 3;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {
    this._books = [];
  }

  public getAll(): Observable<IBook[]> {
    let headers = new HttpHeaders({
      ['accept']: 'application/json',
      ['Authorization']: `Bearer ${this.authService.accessToken}`
    });

    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books',
      { headers: headers });
    // return of(this._books)
  }

  public addBook(book: IAddBook): Observable<any> {
    // this._currentId++;
    // const addbook: IBook = {
    //   id: '11', // this._currentId,
    //   name: book.name,
    //   author: book.author,
    //   userId: ''
    // }
    // this._books.push(addbook);
    return of();
  }

  public editBook() { }

}
