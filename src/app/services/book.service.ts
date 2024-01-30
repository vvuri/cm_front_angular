import { Injectable } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];
  private _currentId: number = 3;

  constructor() {
    this._books = [
      { id: 1, title: 'book one', author: 'Tom H' },
      { id: 2, title: 'book two', author: 'Martin M' },
      { id: 3, title: 'book three', author: 'Tomas F' },
    ]
  }

  public getAll(): Observable<IBook[]> {
    return of(this._books)
  }

  public addBook(book: IAddBook): Observable<any> {
    this._currentId++;
    const addbook: IBook = {
      id: this._currentId,
      title: book.title,
      author: book.author
    }
    this._books.push(addbook);
    return of();
  }

}
