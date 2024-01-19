import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];

  constructor() {
    this._books = [
      { id: 1, title: 'book one', author: 'Tom H' },
      { id: 2, title: 'book two', author: 'Martin M' },
      { id: 3, title: 'book three', author: 'Tomas F' },
    ]
  }

  public getAll(): IBook[] {
    return this._books
  }

}
