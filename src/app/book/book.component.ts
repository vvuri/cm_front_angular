import { Component, Input } from '@angular/core';
import { IAddBook, IBook } from '../interfaces/book';
import { CommonModule } from '@angular/common';
import { BookPipe } from '../pipes/book.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookService } from '../services/book.service';
import { AddBookComponent } from '../dialods/add-book/add-book.component';

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
  ) { }

  public onEdit(id: string): void {
    console.log(id);

    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe((result: IAddBook) => {
      if (result) {
        console.log('The dialog  add Book 1', result);
        this.bookService.editBook(id, result).subscribe();
      }
    });
  }

  public onDelete(id: string): void {
    console.log(id);
    this.bookService.deleteBook(id);
  }

}

