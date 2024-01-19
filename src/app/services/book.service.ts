import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book';
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

  public addBook(): Observable<any> {
    this._currentId++;
    const book: IBook = {
      id: this._currentId,
      title: "New Book",
      author: "Nikkol S"
    }
    this._books.push(book);
    return of();
  }

}
