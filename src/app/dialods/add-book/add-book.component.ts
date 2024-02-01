import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IAddBook } from '../../interfaces/book';

@Component({
  selector: 'cm-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  public bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
  });

  constructor(
    public dialogRef: MatDialogRef<AddBookComponent>,
  ) { }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    const book: IAddBook = {
      name: this.bookForm.get('title')?.value ?? '',
      author: this.bookForm.get('author')?.value ?? ''
    }

    this.dialogRef.close(book);
  }
}
