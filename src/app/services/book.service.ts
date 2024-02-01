import { Injectable } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];
  private _currentId: number = 3;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {
    this._books = [];
  }

  public getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public addBook(book: IAddBook): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + 'books', JSON.stringify(book));
  }

  public editBook() {


  }

}
