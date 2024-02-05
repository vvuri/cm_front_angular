import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IAddBook, IBook } from '../../interfaces/book';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cm-edit-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent implements OnInit {
  public bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
  });

  constructor(
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: IAddBook
  ) { }

  public ngOnInit(): void {
    if (this.data) {
      this.bookForm.get('title')?.setValue(this.data.name);
      this.bookForm.get('author')?.setValue(this.data.author);
    }
  }

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
