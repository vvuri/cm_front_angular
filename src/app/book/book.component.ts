import { Component, Input } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { CommonModule } from '@angular/common';
import { BookPipe } from '../pipes/book.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookService } from '../services/book.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'cm-book',
  standalone: true,
  imports: [
    CommonModule,
    BookPipe,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  @Input() public book: IBook | null = null;
  dialog: any;

  constructor(
    private bookService: BookService,
    private app: AppComponent,
  ) { }

  public onEdit(id: string, book: IAddBook): void {
    console.log('Edit: ', id);
    this.app.editBook(id, book);
  }

  public onDelete(id: string): void {
    console.log('Delete: ', id);
    this.bookService.deleteBook(id).subscribe();
  }

}

