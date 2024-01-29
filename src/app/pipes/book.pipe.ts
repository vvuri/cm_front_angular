import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book';

@Pipe({
  name: 'book',
  standalone: true
})
export class BookPipe implements PipeTransform {

  transform(value: IBook, ...args: unknown[]): string {
    return value.author.toUpperCase();
  }

}
